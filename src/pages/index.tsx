import React, { useState, useEffect } from "react";
import Background from "@/components/background";
import * as G from "@/styles/GlobalStyles";
import Header from "@/components/header";
import MovieCard from "@/components/movieCard";
import api from "@/services/api";
import ReactLoading from "react-loading";
import MoviesList from "@/components/movieList";

export default function Home() {
    return (
        <>
            <Background>
                <G.Line height="88px">
                    <Header />
                </G.Line>
                <G.Line>
                    <MoviesList />
                </G.Line>
            </Background>
        </>
    );
}
