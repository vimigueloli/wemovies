import React, { useContext, useEffect, useState } from "react";
import * as S from "./styles";
import * as G from "@/styles/GlobalStyles";
import add from "@/../public/plusCart.svg";
import { Cart, CartUpdater } from "@/context/cart";
import { money } from "@/utils/money";

interface CardProps {
    movie: {
        id: string;
        title: string;
        price: number;
        image: string;
    };
}

export default function MovieCard({ movie }: CardProps) {
    const [numberOnCart, setNumberOnCart] = useState<number>(0);
    const cart = useContext(Cart);
    const setCart: any = useContext(CartUpdater).update;

    async function handleAddToCart() {
        if (cart.find((item: any) => item.id === movie.id)) {
            setCart(
                cart.map((item: any) =>
                    item.id === movie.id
                        ? {
                              ...item,
                              quantity: item.quantity + 1,
                          }
                        : item
                )
            );
        } else {
            setCart([
                ...cart,
                {
                    ...movie,
                    quantity: 1,
                },
            ]);
        }
        setNumberOnCart(numberOnCart + 1);
    }

    useEffect(() => {
        if (cart.find((item: any) => item.id === movie.id)) {
            let item: any = cart.find((item: any) => item.id === movie.id);
            setNumberOnCart(item.quantity);
        }
    }, []);

    return (
        <S.Container>
            <G.Line width="100%" direction="column" height="244px" gap="8px">
                <img
                    src={movie?.image}
                    style={{
                        width: "147px",
                        height: "188px",
                    }}
                />
                <G.Text size="14px" weight="700" color="#333333">
                    {movie?.title}
                </G.Text>
                <G.Text size="16px" weight="700" color="#2F2E41">
                    {money.format(movie?.price || 0)}
                </G.Text>
            </G.Line>
            <G.Line top="8px">
                <G.Button
                    width="100%"
                    onClick={() => handleAddToCart()}
                    background={numberOnCart > 0 ? "#039B00" : "#009EDD"}
                >
                    <G.Line height="100%" width="100%">
                        <img src={add.src} />
                        <G.Text size="12px" weight="400" left="4px">
                            {numberOnCart}
                        </G.Text>
                        <G.Text size="12px" weight="700" left="12px">
                            ADICIONAR AO CARRINHO
                        </G.Text>
                    </G.Line>
                </G.Button>
            </G.Line>
        </S.Container>
    );
}
