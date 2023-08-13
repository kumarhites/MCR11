import React, { createContext, useContext, useEffect, useState } from "react";
import { movies } from "../data/movieData";

const DataContext = createContext();

const getUniqueGenres = (moviesData) => {
    const uniqueGenresSet = new Set();
    moviesData.forEach((movie) => {
        movie.genre.forEach((genre) => {
            uniqueGenresSet.add(genre);
        });
    });
    return Array.from(uniqueGenresSet);
};

const getUniqueYears = (moviesData) => {
    const uniqueYearsSet = new Set();
    moviesData.map((movie) => uniqueYearsSet.add(movie.year));

    return Array.from(uniqueYearsSet);
};

export const DataProvider = ({ children }) => {
    const [moviesData, setMoviesData] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState("allGenre");
    const [selectedRating, setSelectedRating] = useState("allRating");
    const [selectedYear, setSelectedYear] = useState("allYears");

    useEffect(() => {
        if (localStorage.getItem("movies")) {
            setMoviesData(JSON.parse(localStorage.getItem("movies")));
        } else {
            setMoviesData(movies);
            localStorage.setItem("movies", JSON.stringify(movies));
        }
    }, []);

    const uniqueGenres = getUniqueGenres(moviesData);
    const uniqueYears = getUniqueYears(moviesData);
    const sortedYears = uniqueYears.sort((a, b) => a - b);

    const handleMovieStarRating = (id) => {
        const updatedMovies = moviesData.map((movie) =>
            movie.id === id ? { ...movie, starred: true } : movie
        );
        setMoviesData(updatedMovies);
        localStorage.setItem("movies", JSON.stringify(updatedMovies));
    };

    const handleMovieRemoveStarRating = (id) => {
        const updatedMovies = moviesData.map((movie) =>
            movie.id === id ? { ...movie, starred: false } : movie
        );
        setMoviesData(updatedMovies);
        localStorage.setItem("movies", JSON.stringify(updatedMovies));
    };
    const handleAddToWatchlist = (id) => {
        const updatedMovies = moviesData.map((movie) =>
            movie.id === id ? { ...movie, watchlist: true } : movie
        );
        setMoviesData(updatedMovies);
        localStorage.setItem("movies", JSON.stringify(updatedMovies));
    };

    const handleRemoveFromWatchList = (id) => {
        const updatedMovies = moviesData.map((movie) =>
            movie.id === id ? { ...movie, watchlist: false } : movie
        );
        setMoviesData(updatedMovies);
        localStorage.setItem("movies", JSON.stringify(updatedMovies));
    };

    return (
        <DataContext.Provider
            value={{
                moviesData,
                setMoviesData,
                uniqueGenres,
                sortedYears,
                handleMovieStarRating,
                handleMovieRemoveStarRating,
                handleAddToWatchlist,
                handleRemoveFromWatchList,
                selectedGenre,
                setSelectedGenre,
                selectedRating,
                setSelectedRating,
                selectedYear,
                setSelectedYear,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
