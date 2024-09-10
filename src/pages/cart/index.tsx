import React, { useState, useContext, useEffect } from "react";
import Background from "@/components/background";
import * as G from "@/styles/GlobalStyles";
import * as S from "@/styles/cartStyles";
import Header from "@/components/header";
import { money } from "@/utils/money";
import CartItem from "../../components/cartItem";
import { Cart, CartUpdater } from "@/context/cart";
import empty from "@/../public/emptyCart.svg";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import ReactLoading from "react-loading";
import finish from "@/../public/finish.svg";

export default function CartPage() {
    const [loading, setLoading] = useState<boolean>(false);
    const [finished, setFinished] = useState<boolean>(false);
    const [total, setTotal] = useState<number>(0);
    const cart = useContext(Cart);
    const setCart: any = useContext(CartUpdater).update;
    const router = useRouter();

    async function handleBuy() {
        setLoading(true);
        try {
            // todo  // espaço para integração de api para finalização da compra
            setTimeout(() => {
                setCart([]);
                setFinished(true);
                setLoading(false);
            }, 1000);
        } catch (e) {
            toast.error("falha ao finalizar pedido!");
            console.log(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        let output = cart.reduce(
            (acc, item: any) => acc + item.price * item.quantity,
            0
        );
        setTotal(output);
    }, [cart]);

    return (
        <Background>
            <G.Line>
                <Header />
            </G.Line>
            <G.Line>
                <S.Container>
                    {loading && (
                        <G.Line>
                            <ReactLoading type="spin" />
                        </G.Line>
                    )}

                    {!loading && !finished && (
                        <>
                            {cart.length > 0 && (
                                <S.WhiteContainer>
                                    {
                                        // * desktop cart list * //
                                        <G.Line desktopOnly={true}>
                                            <S.Grid>
                                                <G.Text
                                                    color="#999999"
                                                    weight="700"
                                                    size="14px"
                                                >
                                                    PRODUTO
                                                </G.Text>
                                                <G.Text
                                                    color="#999999"
                                                    weight="700"
                                                    size="14px"
                                                >
                                                    QTD
                                                </G.Text>
                                                <G.Text
                                                    color="#999999"
                                                    weight="700"
                                                    size="14px"
                                                >
                                                    SUBTOTAL
                                                </G.Text>
                                                <G.Line />
                                                {cart.map((item: any) => (
                                                    <CartItem
                                                        key={item.id}
                                                        id={item.id}
                                                        title={item.title}
                                                        price={item.price}
                                                        quantity={item.quantity}
                                                        image={item.image}
                                                    />
                                                ))}
                                            </S.Grid>
                                        </G.Line>
                                    }

                                    {
                                        // * mobile cart list * //
                                        <G.Line
                                            direction="column"
                                            gap="21px"
                                            mobileOnly={true}
                                        >
                                            {cart.map((item: any) => (
                                                <CartItem
                                                    key={item.id}
                                                    id={item.id}
                                                    title={item.title}
                                                    price={item.price}
                                                    quantity={item.quantity}
                                                    image={item.image}
                                                />
                                            ))}
                                        </G.Line>
                                    }

                                    <G.Line
                                        width="100%"
                                        height="1px"
                                        color="#999999"
                                        top="21px"
                                        bottom="21px"
                                    />
                                    {
                                        // * desktop cart finalization section * //
                                        <G.Line
                                            desktopOnly={true}
                                            justify="space-between"
                                        >
                                            <G.Button
                                                onClick={() => handleBuy()}
                                            >
                                                <G.Text
                                                    weight="700"
                                                    align="center"
                                                >
                                                    REALIZAR PEDIDO
                                                </G.Text>
                                            </G.Button>
                                            <G.Line gap="16px">
                                                <G.Text
                                                    size="14px"
                                                    weight="700"
                                                    color="#999999"
                                                >
                                                    TOTAL
                                                </G.Text>
                                                <G.Text
                                                    size="24px"
                                                    weight="700"
                                                    color="#2F2E41"
                                                >
                                                    {money.format(total)}
                                                </G.Text>
                                            </G.Line>
                                        </G.Line>
                                    }
                                    {
                                        // * mobile cart finalization section * //
                                        <G.Line
                                            mobileOnly={true}
                                            justify="space-between"
                                            align="center"
                                            gap="16px"
                                            wrap={true}
                                        >
                                            <G.Text
                                                size="14px"
                                                weight="700"
                                                color="#999999"
                                            >
                                                TOTAL
                                            </G.Text>
                                            <G.Text
                                                size="24px"
                                                weight="700"
                                                color="#2F2E41"
                                            >
                                                {money.format(total)}
                                            </G.Text>
                                            <G.Button
                                                width="100%"
                                                onClick={() => handleBuy()}
                                            >
                                                <G.Text
                                                    weight="700"
                                                    align="center"
                                                >
                                                    REALIZAR PEDIDO
                                                </G.Text>
                                            </G.Button>
                                        </G.Line>
                                    }
                                </S.WhiteContainer>
                            )}
                            {cart.length === 0 && (
                                <S.EmptyContainer>
                                    <G.Line direction="column">
                                        <G.Line bottom="24px">
                                            <G.Text
                                                color="#2F2E41"
                                                weight="700"
                                                size="20px"
                                                align="center"
                                            >
                                                Adicione itens ao carrinho para
                                                prosseguir
                                            </G.Text>
                                        </G.Line>
                                        <img src={empty.src} />
                                        <G.Line
                                            width="33%"
                                            height="1px"
                                            color="black"
                                            bottom="24px"
                                        />
                                        <G.Button
                                            onClick={() => router.push("/")}
                                        >
                                            Voltar aos produtos
                                        </G.Button>
                                    </G.Line>
                                </S.EmptyContainer>
                            )}
                        </>
                    )}

                    {!loading && finished && (
                        <S.EmptyContainer>
                            <G.Line direction="column">
                                <G.Line bottom="24px">
                                    <G.Text
                                        color="#2F2E41"
                                        weight="700"
                                        size="20px"
                                        align="center"
                                    >
                                        Compra realizada com sucesso!
                                    </G.Text>
                                </G.Line>
                                <img src={finish.src} />
                                <G.Line
                                    width="33%"
                                    height="1px"
                                    bottom="24px"
                                />
                                <G.Button onClick={() => router.push("/")}>
                                    VOLTAR
                                </G.Button>
                            </G.Line>
                        </S.EmptyContainer>
                    )}
                </S.Container>
            </G.Line>
        </Background>
    );
}
