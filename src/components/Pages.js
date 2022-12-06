import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import SubHeader from "./SubHeader";
import Movies from "./pages/Movies";
import Sessions from "./pages/Sessions"

export default function Pages() {
    const [listMovies, setListMovies] = useState([]);
    const [chosenMovie, setChosenMovie] = useState("");
    useEffect(() => {
        const res = axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies');
        res.then(res => setListMovies(res.data))
        res.catch(err => console.log(err.res.data))
    }, []);
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="movies" index element={
                        <>
                            <SubHeader text={"Selecione o filme"} />
                            <Movies listMovies={listMovies} setChosenMovie={setChosenMovie} />
                        </>
                    } />
                    <Route path="sessions" element={
                        <>
                            <SubHeader text={"Selecione o horário"} />
                            <Sessions chosenMovie={chosenMovie} />
                        </>
                    } />
                </Routes>
            </BrowserRouter>
        </div>
    );
};