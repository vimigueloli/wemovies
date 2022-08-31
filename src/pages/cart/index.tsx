import React, { useState, useEffect } from "react";
import * as S from "../../styles/cart/styles";
import * as G from "styles/GlobalStyles";
import Carttable from "components/CartTable";
import CartItem from "components/CartItem";
import empty from "public/assets/empty.svg";
import done from "public/assets/over.svg";
import { parseCookies } from "nookies";
import { FiArrowLeftCircle } from "react-icons/fi";
import { useRouter } from "next/router";
import { money } from "components/masks";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeAll } from "services/redux";

export default function Cart() {
    const router = useRouter();
    const dispatch = useDispatch();
    const [items, setItems] = useState<any[]>([]);
    const [total, setTotal] = useState(0);
    const [bought, setBought] = useState(false);

    // ? get the shopping cart
    useEffect(() => {
        const cookies = parseCookies();
        if (
            cookies.cart !== undefined &&
            cookies.cart !== null &&
            cookies.cart !== ""
        ) {
            setItems(JSON.parse(cookies.cart));
        }
    }, []);

    // ? updates the total
    useEffect(() => {
        let outputSubtotal = 0;
        items.map((item) => {
            outputSubtotal += item.price * item.quantity;
        });
        setTotal(outputSubtotal);
    }, [items]);

    async function buy() {
        try {
            // todo change the api route
            //! await api.post("/buy", items);
            setBought(true);
            dispatch(removeAll({}));
        } catch {
            console.log("erro");
        }
    }

    return (
        <>
            {
                // * items on cart
                items.length > 0 && !bought && (
                    <>
                        <S.Container>
                            <S.ResponsiveConrainer>
                                <G.Line justify="start" top="12px" left="12px">
                                    <S.ColorHover onClick={() => router.back()}>
                                        <FiArrowLeftCircle size="1.7em" />
                                    </S.ColorHover>
                                </G.Line>
                                <Carttable>
                                    {items.map((item, idx) => (
                                        <CartItem
                                            key={item.id}
                                            id={item.id}
                                            name={item.name}
                                            price={item.price}
                                            image={item.image}
                                            quantity={item.quantity}
                                            items={items}
                                            setItems={setItems}
                                            idx={idx}
                                        />
                                    ))}
                                </Carttable>
                                <S.Separator />
                                <G.Line
                                    width="auto"
                                    justify="space-between"
                                    bottom="12px"
                                    left="16px"
                                    right="16px"
                                >
                                    <G.Button onClick={() => buy()}>
                                        FINALIZAR PEDIDO
                                    </G.Button>
                                    <G.Line align="end">
                                        <G.Line right="4px">
                                            <G.Text
                                                color="#999999"
                                                size="14px"
                                                weight="700"
                                            >
                                                TOTAL
                                            </G.Text>
                                        </G.Line>
                                        <G.Text
                                            color="#2F2E41"
                                            size="24px"
                                            weight="700"
                                        >
                                            {money.format(total)}
                                        </G.Text>
                                    </G.Line>
                                </G.Line>
                            </S.ResponsiveConrainer>
                        </S.Container>
                        <G.Line height="12px" />
                    </>
                )
            }
            {
                // * no items on cart
                items.length === 0 && !bought && (
                    <G.Line width="100%">
                        <S.NullContainer>
                            <div>
                                <G.Line bottom="50px">
                                    <G.Text
                                        color="#2F2E41"
                                        size="20px"
                                        weight="700"
                                    >
                                        Parece que não há nada por aqui :(
                                    </G.Text>
                                </G.Line>
                                <G.Line>
                                    <S.ImageSizer>
                                        <Image
                                            src={empty}
                                            alt="carrinho vazio"
                                            layout="fill"
                                        />
                                    </S.ImageSizer>
                                </G.Line>

                                <G.Line top="32px">
                                    <G.Button onClick={() => router.back()}>
                                        VOLTAR
                                    </G.Button>
                                </G.Line>
                            </div>
                        </S.NullContainer>
                    </G.Line>
                )
            }
            {
                // * done buying
                bought && (
                    <G.Line width="100%">
                        <S.NullContainer>
                            <div>
                                <G.Line bottom="50px">
                                    <G.Text
                                        color="#2F2E41"
                                        size="20px"
                                        weight="700"
                                    >
                                        Compra realizada com sucesso!
                                    </G.Text>
                                </G.Line>
                                <G.Line>
                                    <S.ImageSizer>
                                        <Image
                                            src={done}
                                            alt="carrinho vazio"
                                            height={264}
                                        />
                                    </S.ImageSizer>
                                </G.Line>
                                <G.Line top="32px">
                                    <G.Button onClick={() => router.back()}>
                                        VOLTAR
                                    </G.Button>
                                </G.Line>
                            </div>
                        </S.NullContainer>
                    </G.Line>
                )
            }
        </>
    );
}
