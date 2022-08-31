import React, { useEffect, useState } from "react";
import MovieItem from "components/MovieItem";
import type { NextPage } from "next";
import * as G from "styles/GlobalStyles";
import api from "services/api";
import toast from "react-hot-toast";

interface MovieProps {
    id: string;
    name: string;
    price: number;
    image: string;
}

const Home: NextPage = () => {
    const [list, setList] = useState<MovieProps[]>([]);

    // ? get the movie list
    useEffect(() => {
        async function getItems() {
            try {
                const response = await api.get("/products");
                setList(response.data);
            } catch {
                toast.error("Falha de comunicação com o servidor");
            }
        }
        getItems();
    }, []);

    return (
        <G.ItemsList>
            {list.map((item) => (
                <MovieItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                />
            ))}
        </G.ItemsList>
    );
};

export default Home;
