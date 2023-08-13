import React from "react";
import { NavLink } from "react-router-dom";
import { useData } from "../contexts/DataContext";

const Card = ({ movie }) => {
    const {
        handleMovieStarRating,
        handleMovieRemoveStarRating,
        handleAddToWatchlist,
        handleRemoveFromWatchList,
    } = useData();

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow flex flex-col h-full">
            <img
                className="rounded-t-lg object-cover"
                src={movie.imageURL}
                alt={movie.title}
            />

            <div className="p-5 flex-grow">
                <NavLink
                    to={`/movieDetails/${movie.id}`}
                    className="mb-2 text-2xl font-bold tracking-tight text-gray-900"
                >
                    {movie.title}
                </NavLink>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {movie.summary}
                </p>
                <div className="bottom-5">
                    {movie.starred ? (
                        <button
                            className="px-5 py-2 mr-5 bg-red-600 rounded text-white font-semibold tracking-tight"
                            onClick={() =>
                                handleMovieRemoveStarRating(movie.id)
                            }
                        >
                            Unstar
                        </button>
                    ) : (
                        <button
                            className="px-5 py-2 mr-5 bg-blue-600 rounded text-white font-semibold tracking-tight"
                            onClick={() => handleMovieStarRating(movie.id)}
                        >
                            Star
                        </button>
                    )}
                    {movie.watchlist ? (
                        <button
                            className="mt-2 px-5 py-2 bg-red-600 rounded text-white font-semibold tracking-tight"
                            onClick={() => handleRemoveFromWatchList(movie.id)}
                        >
                            Remove from watchlist
                        </button>
                    ) : (
                        <button
                            className="mt-2 px-5 py-2 bg-blue-600 rounded text-white font-semibold tracking-tight"
                            onClick={() => handleAddToWatchlist(movie.id)}
                        >
                            Add to watchlist
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;
