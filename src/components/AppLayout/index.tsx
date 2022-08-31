import React, { ReactNode, useEffect, useState } from "react";
import * as S from "./styles";
import * as G from "styles/GlobalStyles";
import Image from "next/image";
import { MdShoppingBasket } from "react-icons/md";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useSelector, useDispatch } from "react-redux";
import { setCookie } from "nookies";
import { updatePage } from "services/redux";

interface LayoutProps {
    children: ReactNode;
}

export default function AppLayout({ children }: LayoutProps) {
    const router = useRouter();
    const dispatch = useDispatch();
    const cart = useSelector((state: any) => state.cart.value);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const cookies = parseCookies();
        setLoading(true);
        if (
            cookies.cart !== undefined &&
            cookies.cart !== "" &&
            cookies.cart !== null
        ) {
            const list = JSON.parse(cookies.cart);
            if (list.length > 0 && cart.length === 0) {
                console.log("lista->", list);
                console.log("carro->", cart);
                dispatch(updatePage(list));
                console.log("carro depois->", cart);
            }
            setLoading(false);
        } else {
            setCookie(null, "cart", JSON.stringify([]));
            setLoading(false);
        }
    }, []);

    return (
        <S.BG>
            <S.Content>
                <G.Line
                    width="100%"
                    justify="space-between"
                    height="72px"
                    top="16px"
                    bottom="41px"
                >
                    <G.Line left="12px">
                        <G.Text size="20px" weight="700">
                            WeMovies
                        </G.Text>
                    </G.Line>
                    <S.OpacityHover onClick={() => router.push("cart")}>
                        <G.Line align="right">
                            <div>
                                <G.Text align="right" size="14px" weight="600">
                                    Meu Carrinho
                                </G.Text>
                                <G.Text
                                    align="right"
                                    color="#999999"
                                    size="12px"
                                    weight="600"
                                >
                                    {!loading && `${cart.length} items`}
                                </G.Text>
                            </div>
                            <G.Line right="12px" left="10px">
                                <MdShoppingBasket size="2em" color="#ffffff" />
                            </G.Line>
                        </G.Line>
                    </S.OpacityHover>
                </G.Line>
                <div>{children}</div>
            </S.Content>
        </S.BG>
    );
}
