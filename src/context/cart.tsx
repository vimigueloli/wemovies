import { createContext, ReactNode, useState, useEffect } from "react";

export interface ItemProps {
    id?: number;
    title?: string;
    price?: number;
    image?: string;
}

interface UpdaterProps {
    update?: Function;
}

export const Cart = createContext<ItemProps[]>([]);
export const CartUpdater = createContext<UpdaterProps>({});

interface ProviderProps {
    children: ReactNode;
}

export default function CartProvider({ children }: ProviderProps) {
    const [cartState, setCartState] = useState<ItemProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function loadCart() {
            const fav = await localStorage.getItem("cart");
            if (fav && fav !== undefined) {
                console.log("cookies ->", JSON.parse(fav));
                setCartState(JSON.parse(fav));
            }
            setLoading(false);
            console.log("loaded");
        }
        async function updateCookies() {
            console.log("update->", cartState);
            localStorage.setItem("cart", JSON.stringify(cartState));
        }

        if (loading) {
            loadCart();
        } else {
            updateCookies();
        }
    }, [cartState]);

    return (
        <Cart.Provider value={cartState}>
            <CartUpdater.Provider value={{ update: setCartState }}>
                {children}
            </CartUpdater.Provider>
        </Cart.Provider>
    );
}
