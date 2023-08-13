import React, { useState } from "react";
import { useData } from "../contexts/DataContext";
import Card from "../components/Card";

const Watchlist = () => {
    const { moviesData } = useData();
    const watchlist = moviesData?.filter((movie) => movie.watchlist === true);

    return (
        <div className="mt-5">
            <div className="max-w-[1280px] mx-auto grid grid-cols-3 gap-2 place-items-center pb-10 px-5">
                {watchlist.length === 0 ? (
                    <h1 className="mb-2 text-2xl font-bold tracking-tight">
                        Add movies in watchlist!
                    </h1>
                ) : (
                    watchlist?.map((movie) => (
                        <Card movie={movie} key={movie.id} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Watchlist;
