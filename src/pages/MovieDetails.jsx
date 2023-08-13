import React from "react";
import { useParams } from "react-router-dom";
import { useData } from "../contexts/DataContext";

const MovieDetails = () => {
    const { id } = useParams();
    const {
        moviesData,
        handleMovieStarRating,
        handleMovieRemoveStarRating,
        handleAddToWatchlist,
        handleRemoveFromWatchList,
    } = useData();
    const movie = moviesData?.find(
        (movie) => movie?.id === parseInt(id) || movie?.id === id
    );

    return (
        <div className="flex h-full max-w-[1280px] mx-auto justify-center mt-16">
            <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-7xl">
                <img
                    class="object-cover w-full rounded-t-lg md:h-auto md:w-96 md:rounded-none md:rounded-l-lg"
                    src={movie?.imageURL}
                    alt={movie?.title}
                />
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900">
                        {movie?.title}
                    </h5>
                    <p class="mb-3 font-normal text-gray-700">
                        {movie?.summary}
                    </p>
                    <p class="mb-3 font-normal text-gray-700">
                        Year: {movie?.year}
                    </p>
                    <p className="mb-3 font-normal text-gray-700">
                        Genre:{" "}
                        {movie?.genre?.map((genre, index) => (
                            <span key={index}>
                                {genre}
                                {index !== movie.genre.length - 1 && ", "}
                            </span>
                        ))}
                    </p>
                    <p class="mb-3 font-normal text-gray-700">
                        Director: {movie?.director}
                    </p>
                    <p class="mb-3 font-normal text-gray-700">
                        Writer: {movie?.writer}
                    </p>
                    <p className="mb-3 font-normal text-gray-700">
                        Cast:{" "}
                        {movie?.cast?.map((cast, index) => (
                            <span key={index}>
                                {cast}
                                {index !== movie.cast.length - 1 && ", "}
                            </span>
                        ))}
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
                                onClick={() =>
                                    handleRemoveFromWatchList(movie.id)
                                }
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
        </div>
    );
};

export default MovieDetails;
