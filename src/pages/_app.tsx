import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import AppLayout from "components/AppLayout";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "services/redux";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Toaster position="top-center" />
            <Provider store={store}>
                <Head>
                    <title>wemovies</title>
                    <meta name="wemovies" content="movies ecommerce" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <AppLayout>
                    <Component {...pageProps} />
                </AppLayout>
            </Provider>
        </>
    );
}

export default MyApp;
