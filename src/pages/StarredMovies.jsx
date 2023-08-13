import React, { useState } from "react";
import { useData } from "../contexts/DataContext";
import Card from "../components/Card";

const StarredMovies = () => {
    const { moviesData } = useData();
    const starredMovies = moviesData?.filter((movie) => movie.starred === true);

    return (
        <div className="mt-5">
            <div className="max-w-[1280px] mx-auto grid grid-cols-3 gap-2 place-items-center pb-10 px-5">
                {starredMovies.length === 0 ? (
                    <h1 className="mb-2 text-2xl font-bold tracking-tight">
                        Add movies to starred list!
                    </h1>
                ) : (
                    starredMovies?.map((movie) => (
                        <Card movie={movie} key={movie.id} />
                    ))
                )}
            </div>
        </div>
    );
};

export default StarredMovies;
