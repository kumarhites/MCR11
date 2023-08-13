import React from "react";
import { NavLink } from "react-router-dom";
import { useData } from "../contexts/DataContext";

const Navbar = () => {
    const { search, setSearch } = useData();

    

    return (
        <div className="h-20 bg-neutral-800 flex justify-between">
            <NavLink
                to="/"
                className="mb-2 text-2xl font-bold tracking-tight text-gray-50 flex items-center px-7"
            >
                IMDB
            </NavLink>
            <div className="flex items-center">
                <input
                    type="search"
                    name="search"
                    id="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-96 p-2 rounded"
                    placeholder="Search for movies by title, cast or director..."
                />
            </div>
            <div className=" flex gap-5 items-center">
                <NavLink
                    to="/"
                    className="mb-2 text-xl p-2 font-bold tracking-tight text-gray-50 flex items-center"
                >
                    Movies
                </NavLink>
                <NavLink
                    to="/watchList"
                    className="mb-2 text-xl p-2 font-bold tracking-tight text-gray-50 flex items-center"
                >
                    Watch List
                </NavLink>
                <NavLink
                    to="/starredMovies"
                    className="mb-2 text-xl pr-5 font-bold tracking-tight text-gray-50 flex items-center"
                >
                    Starred Movies
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;
