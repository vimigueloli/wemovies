import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import api from "@/services/api";
import * as G from "@/styles/GlobalStyles";
import * as S from "./styles";
import nothing from "@/../public/refresh.svg";
import MovieCard from "../movieCard";
import toast from "react-hot-toast";

export default function MoviesList() {
    const [loading, setLoading] = useState<boolean>(true);
    const [movies, setMovies] = useState<any[]>([]);

    async function loadMovies() {
        setLoading(true);
        try {
            const response = await api.get("/movies");
            setMovies(response.data.products);
            setLoading(false);
        } catch (e: any) {
            toast.error("falha ao carregar lista de produtos!");
            console.log(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        loadMovies();
    }, []);

    return (
        <>
            <S.Container>
                {loading && (
                    <G.Line>
                        <ReactLoading type="spin" />
                    </G.Line>
                )}
                {!loading && movies.length > 0 && (
                    <S.ContentContainer>
                        {movies.map((item: any) => (
                            <MovieCard movie={item} />
                        ))}
                    </S.ContentContainer>
                )}
                {!loading && movies.length === 0 && (
                    <S.EmptyContainer>
                        <G.Line direction="column">
                            <G.Line bottom="24px">
                                <G.Text
                                    color="#2F2E41"
                                    weight="700"
                                    size="20px"
                                    align="center"
                                >
                                    Parece que não há nada por aqui :(
                                </G.Text>
                            </G.Line>
                            <img src={nothing.src} />
                            <G.Line
                                width="33%"
                                height="1px"
                                color="black"
                                bottom="24px"
                            />
                            <G.Button onClick={() => loadMovies()}>
                                Recarregar página
                            </G.Button>
                        </G.Line>
                    </S.EmptyContainer>
                )}
            </S.Container>
        </>
    );
}
