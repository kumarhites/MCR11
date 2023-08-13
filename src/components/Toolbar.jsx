import React, { useState } from "react";
import { useData } from "../contexts/DataContext";
import { NavLink } from "react-router-dom";

const Toolbar = () => {
    const {
        uniqueGenres,
        sortedYears,
        selectedGenre,
        setSelectedGenre,
        selectedRating,
        setSelectedRating,
        selectedYear,
        setSelectedYear,
    } = useData();

    const handleGenreChange = (e) => {
        setSelectedGenre(e.target.value);
    };
    const handleRatingChange = (e) => {
        setSelectedRating(e.target.value);
    };
    const handleReleaseYearChange = (e) => {
        setSelectedYear(e.target.value);
    };
    return (
        <div className="flex items-center justify-between p-10">
            <h1 className="mb-2 text-2xl font-bold tracking-tight">Movies</h1>
            {/* genre dropdown */}
            <select
                name="genre"
                id="genre"
                value={selectedGenre}
                onChange={(e) => handleGenreChange(e)}
                className="bg-slate-100 p-2 rounded border"
            >
                <option value="allGenre" selected>
                    All Genre
                </option>
                {uniqueGenres?.map((genre) => (
                    <option value={genre} key={genre}>
                        {genre}
                    </option>
                ))}
            </select>
            {/* rating dropdown */}
            <select
                name="rating"
                id="rating"
                value={selectedRating}
                onChange={(e) => handleRatingChange(e)}
                className="bg-slate-100 p-2 rounded border"
            >
                <option value="allRating" selected>
                    All Rating
                </option>
                <option value="10">10</option>
                <option value="9">9</option>
                <option value="8">8</option>
                <option value="7">7</option>
                <option value="6">6</option>
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
            </select>

            {/* release year dropdown */}
            <select
                name="selectedYear"
                id="selectedYear"
                value={selectedYear}
                onChange={(e) => handleReleaseYearChange(e)}
                className="bg-slate-100 p-2 rounded border"
            >
                <option value="2050" selected>
                    All Years
                </option>
                {sortedYears?.map((year) => (
                    <option value={year} key={year}>
                        {year}
                    </option>
                ))}
            </select>
            {/* add movie button */}
            <NavLink
                to="/add"
                className="px-5 bg-blue-600 text-white py-2 mb-2 font-bold rounded"
            >
                Add movie
            </NavLink>
        </div>
    );
};

export default Toolbar;
