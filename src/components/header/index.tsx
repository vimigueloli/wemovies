import React, { useContext, useState, useEffect } from "react";
import * as G from "@/styles/GlobalStyles";
import * as S from "./styles";
import cartIcon from "@/../public/cartIcon.svg";
import { Cart } from "@/context/cart";
import { useRouter } from "next/router";

export default function Header() {
    const [numberOfCartItems, setNumberOfCartItems] = useState<number>();
    const cart = useContext(Cart);
    const router = useRouter();

    function handleCartNavigation() {
        if (router.route !== "/cart") {
            router.push("cart");
        }
    }

    useEffect(() => {
        let output = cart.reduce((acc, item: any) => item.quantity + acc, 0);
        setNumberOfCartItems(output);
    }, [cart]);

    return (
        <S.Container>
            <S.NavButton onClick={() => router.push("/")}>
                <G.Text size="20px" weight="700">
                    WeMovies
                </G.Text>
            </S.NavButton>
            <S.NavButton onClick={() => handleCartNavigation()}>
                <G.Line gap="16px">
                    <div>
                        <S.HideOnMobile>
                            <G.Text>Meu Carrinho</G.Text>
                        </S.HideOnMobile>
                        <G.Text size="12px" color="#999999" align="right">
                            {numberOfCartItems} itens
                        </G.Text>
                    </div>
                    <div>
                        <img src={cartIcon.src} />
                    </div>
                </G.Line>
            </S.NavButton>
        </S.Container>
    );
}
