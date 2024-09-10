import CartProvider from "@/context/cart";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>wemovies</title>
                <meta
                    name="description"
                    content="Site para compra de midias digitais"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="../../public/icon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    //@ts-ignore
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Toaster position="top-center" />
            <CartProvider>
                <Component {...pageProps} />
            </CartProvider>
        </>
    );
}
