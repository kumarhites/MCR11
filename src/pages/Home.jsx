import React, { useEffect, useState } from "react";
import { useData } from "../contexts/DataContext";
import Toolbar from "../components/Toolbar";
import Card from "../components/Card";

const Home = () => {
    const {
        moviesData,
        selectedGenre,
        setSelectedGenre,
        selectedRating,
        setSelectedRating,
        selectedYear,
        setSelectedYear,
    } = useData();

    const [allMovies, setAllMovies] = useState(moviesData);

    useEffect(() => {
        let filteredAndSortedData = [...moviesData];
        if (selectedGenre !== "allGenre") {
            filteredAndSortedData = filteredAndSortedData.filter((movie) =>
                movie.genre.includes(selectedGenre)
            );
        }
        if (selectedRating !== "allRating") {
            filteredAndSortedData = filteredAndSortedData.filter(
                (movie) => movie.rating >= selectedRating
            );
        }
        if (selectedYear !== "allYears") {
            filteredAndSortedData = filteredAndSortedData.filter(
                (movie) => movie.year === parseInt(selectedYear, 10)
            );
        }
        setAllMovies(filteredAndSortedData);
    }, [selectedGenre, selectedYear, selectedRating, moviesData]);

    return (
        <>
            <Toolbar />
            <div className="max-w-[1280px] mx-auto grid grid-cols-3 gap-2 place-items-center pb-10 px-5">
                {allMovies?.map((movie) => (
                    <Card movie={movie} key={movie.id} />
                ))}
            </div>
        </>
    );
};

export default Home;
