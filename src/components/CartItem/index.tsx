import React, { useContext } from "react";
import * as G from "@/styles/GlobalStyles";
import * as S from "./styles";
import plus from "@/../public/circlePlus.svg";
import minus from "@/../public/circleMinus.svg";
import trash from "@/../public/trash.svg";
import { money } from "@/utils/money";
import { Cart, CartUpdater } from "@/context/cart";

interface CartItemProps {
    id: string;
    title: string;
    price: number;
    quantity: number;
    image: string;
}

export default function CartItem({
    id,
    title,
    price,
    quantity,
    image,
}: CartItemProps) {
    const cart = useContext(Cart);
    const setCart: any = useContext(CartUpdater).update;

    function handleAdd() {
        let output = cart.map((item: any) =>
            item.id === id ? { ...item, quantity: quantity + 1 } : item
        );
        setCart(output);
    }

    function handleSubtract() {
        let output = cart.map((item: any) =>
            item.id === id ? { ...item, quantity: quantity - 1 } : item
        );
        output = output.filter((item: any) => item.quantity > 0);
        setCart(output);
    }

    function handleDelete() {
        let output = cart.filter((item: any) => item.id !== id);
        setCart(output);
    }

    return (
        <>
            {
                // * desktop version * //
                <>
                    <G.Line
                        justify="flex-start"
                        gap="16px"
                        top="24px"
                        desktopOnly={true}
                    >
                        <img
                            src={image}
                            style={{
                                width: "91px",
                                height: "114px",
                            }}
                        />
                        <G.Line direction="column" gap="8px" align="flex-start">
                            <G.Text weight="700" size="14px" color="#2F2E41">
                                {title}
                            </G.Text>
                            <G.Text weight="700" size="16px" color="#2F2E41">
                                {money.format(price)}
                            </G.Text>
                        </G.Line>
                    </G.Line>
                    <G.Line
                        justify="flex-start"
                        gap="11px"
                        top="24px"
                        desktopOnly={true}
                    >
                        <S.TransparentButton onClick={() => handleSubtract()}>
                            <img src={minus.src} />
                        </S.TransparentButton>
                        <S.NumberBox>{quantity}</S.NumberBox>
                        <S.TransparentButton onClick={() => handleAdd()}>
                            <img src={plus.src} />
                        </S.TransparentButton>
                    </G.Line>
                    <G.Line
                        justify="flex-start"
                        gap="11px"
                        top="24px"
                        desktopOnly={true}
                    >
                        <G.Text color="#2F2E41" size="16px" weight="700">
                            {money.format(quantity * price)}
                        </G.Text>
                    </G.Line>
                    <G.Line
                        justify="flex-end"
                        gap="11px"
                        top="24px"
                        desktopOnly={true}
                    >
                        <S.TransparentButton onClick={() => handleDelete()}>
                            <img src={trash.src} />
                        </S.TransparentButton>
                    </G.Line>
                </>
            }

            {
                // * mobile version * //
                <G.Line
                    justify="flex-start"
                    width="100%"
                    gap="16px"
                    mobileOnly={true}
                >
                    <img
                        src={image}
                        style={{
                            width: "64px",
                            height: "82px",
                        }}
                    />
                    <G.Line
                        width="100%"
                        justify="space-between"
                        direction="column"
                        height="82px"
                    >
                        <G.Line
                            justify="space-between"
                            height="100%"
                            gap="16px"
                            width="100%"
                        >
                            <G.Text
                                color="#2F2E41"
                                align="left"
                                size="14px"
                                weight="700"
                            >
                                {title}
                            </G.Text>
                            <G.Line gap="11px">
                                <G.Text
                                    color="#2F2E41"
                                    size="16px"
                                    weight="700"
                                >
                                    {money.format(price)}
                                </G.Text>
                                <S.TransparentButton
                                    onClick={() => handleDelete()}
                                >
                                    <img src={trash.src} />
                                </S.TransparentButton>
                            </G.Line>
                        </G.Line>
                        <G.Line justify="space-between" gap="8px" width="100%">
                            <G.Line justify="flex-start" gap="11px">
                                <S.TransparentButton
                                    onClick={() => handleSubtract()}
                                >
                                    <img src={minus.src} />
                                </S.TransparentButton>
                                <S.NumberBox>{quantity}</S.NumberBox>
                                <S.TransparentButton
                                    onClick={() => handleAdd()}
                                >
                                    <img src={plus.src} />
                                </S.TransparentButton>
                            </G.Line>
                            <div>
                                <G.Text
                                    size="12px"
                                    color="#999999"
                                    weight="700"
                                >
                                    SUBTOTAL
                                </G.Text>
                                <G.Text
                                    size="16px"
                                    color="background: #2F2E41;
"
                                    weight="700"
                                >
                                    {money.format(price * quantity)}
                                </G.Text>
                            </div>
                        </G.Line>
                    </G.Line>
                </G.Line>
            }
        </>
    );
}
