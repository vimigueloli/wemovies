/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import * as S from "./styles";
import * as G from "styles/GlobalStyles";
import { money, numberMask } from "components/masks";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";
import { IoMdTrash } from "react-icons/io";
import { useDispatch } from "react-redux";
import { updateItem, removeProduct } from "services/redux";

interface MovieOnCartProps {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
    idx: number;
    items: any[];
    setItems: Function;
}

export default function CartItem({
    id,
    name,
    price,
    image,
    quantity,
    items,
    setItems,
    idx,
}: MovieOnCartProps) {
    const dispatch = useDispatch();
    const [quantityCounter, setQuantityCounter] = useState(quantity);

    // ? delete the item of the cart
    function removeItem() {
        const output: any[] = [];
        items.map((product, index) =>
            index === idx ? null : output.push(product)
        );
        setItems(output);
        dispatch(
            removeProduct({
                id: id,
            })
        );
    }

    // ? update the global state and the cookies of the cart
    useEffect(() => {
        dispatch(
            updateItem({
                id: id,
                name: name,
                quantity: quantityCounter,
                price: price,
                image: image,
            })
        );
    }, [quantityCounter]);

    // ? update the total counter
    useEffect(() => {
        const output: any = [];
        items.map((product, index) =>
            index === idx
                ? output.push({
                      id: id,
                      name: name,
                      price: price,
                      image: image,
                      quantity: quantityCounter,
                  })
                : output.push(product)
        );
        setItems(output);
    }, [quantityCounter]);

    return (
        <tr>
            <td>
                <G.Line justify="start" top="8px" bottom="8px" left="10px">
                    <img src={image} alt={name} height={114} />
                </G.Line>
            </td>
            <td>
                <G.Line justify="start">
                    <div>
                        <G.Text color="#2F2E41" size="14px" weight="700">
                            {name}
                        </G.Text>
                        <G.Text color="#2F2E41" size="14px" weight="700">
                            {money.format(price)}
                        </G.Text>
                    </div>
                </G.Line>
            </td>
            <td>
                <G.Line justify="start">
                    {quantityCounter > 1 ? (
                        <S.OpacityHover
                            onClick={() =>
                                setQuantityCounter(quantityCounter - 1)
                            }
                        >
                            <BiMinusCircle size="1.8em" />
                        </S.OpacityHover>
                    ) : (
                        <S.OpacityHover disabled>
                            <BiMinusCircle size="1.8em" />
                        </S.OpacityHover>
                    )}
                    <S.Input
                        value={quantityCounter}
                        onChange={(e) =>
                            setQuantityCounter(
                                Number(numberMask(e.target.value))
                            )
                        }
                    />
                    <S.OpacityHover
                        onClick={() => setQuantityCounter(quantityCounter + 1)}
                    >
                        <BiPlusCircle size="1.8em" />
                    </S.OpacityHover>
                </G.Line>
            </td>
            <td>
                <G.Text color="#2F2E41" size="14px" weight="700">
                    {money.format(quantityCounter * price)}
                </G.Text>
            </td>
            <td>
                <G.Line left="36px" right="36px">
                    <S.OpacityHover onClick={() => removeItem()}>
                        <IoMdTrash size="2em" color="#009EDD" />
                    </S.OpacityHover>
                </G.Line>
            </td>
        </tr>
    );
}
