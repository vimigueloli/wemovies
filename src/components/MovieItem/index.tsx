/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import * as S from "./styles";
import * as G from "styles/GlobalStyles";
import { useDispatch, useSelector } from "react-redux";
import { money } from "components/masks";
import { addProduct, removeProduct } from "services/redux";
import { MdRemoveShoppingCart, MdAddShoppingCart } from "react-icons/md";

interface MovieProps {
    id: string;
    name: string;
    price: number;
    image: string;
}

export default function MovieItem({ id, name, price, image }: MovieProps) {
    const dispatch = useDispatch();
    const cart = useSelector((state: any) => state.cart.value);
    const [quantity, setQuantity] = useState(1);
    const [onCart, setOnCart] = useState(false);

    async function addToCart() {
        dispatch(
            addProduct({
                id: id,
                name: name,
                quantity: quantity,
                image: image,
                price: price,
            })
        );
        setOnCart(true);
    }

    async function removeOfCart() {
        dispatch(removeProduct({ id: id }));
        setOnCart(false);
    }

    useEffect(() => {
        cart.map((item: any) =>
            item.id === id
                ? (setOnCart(true), setQuantity(item.quantity))
                : null
        );
    }, [cart]);

    return (
        <S.Container>
            <S.LineCenter>
                <img src={image} height={188} />
            </S.LineCenter>
            <S.LineCenter>{name}</S.LineCenter>
            <S.LineLeft> {money.format(price)}</S.LineLeft>
            {!onCart && (
                <G.Button width="100%" size="12px" onClick={() => addToCart()}>
                    <S.LineBetween>
                        <S.Quantity>
                            <MdAddShoppingCart size="1.3em" />
                            {quantity}
                        </S.Quantity>
                        <G.Text weight="700" size="12px">
                            ADICIONAR AO CARRINHO
                        </G.Text>
                    </S.LineBetween>
                </G.Button>
            )}
            {onCart && (
                <G.Button
                    background="gray"
                    width="100%"
                    size="12px"
                    onClick={() => removeOfCart()}
                >
                    <S.LineBetween>
                        <S.Quantity>
                            <MdRemoveShoppingCart size="1.3em" />
                            {quantity}
                        </S.Quantity>
                        <G.Text weight="700" size="12px">
                            REMOVER DO CARRINHO
                        </G.Text>
                    </S.LineBetween>
                </G.Button>
            )}
        </S.Container>
    );
}
