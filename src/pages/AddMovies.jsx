import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useData } from "../contexts/DataContext";

const AddMovies = () => {
    const { handleAddNewData } = useData();
    const [newMovie, setNewMovie] = useState({
        id: uuidv4(),
        title: "",
        genre: "",
        year: "",
        rating: "",
        director: "",
        writer: "",
        cast: "",
        summary: "",
        imageURL: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMovie((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAddMovie = (e) => {
        e.preventDefault();
        if (
            !newMovie.title ||
            !newMovie.genre ||
            !newMovie.year ||
            !newMovie.rating ||
            !newMovie.director ||
            !newMovie.writer ||
            !newMovie.cast ||
            !newMovie.summary ||
            !newMovie.imageURL
        ) {
            return;
        }

        handleAddNewData(newMovie);

        setNewMovie({
            id: uuidv4(),
            title: "",
            genre: "",
            year: "",
            rating: "",
            director: "",
            writer: "",
            cast: "",
            summary: "",
            imageURL: "",
        });
    };

    return (
        <div>
            <form className="p-12" onSubmit={handleAddMovie}>
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Add a new movie
                </h1>
                <div className="flex flex-col mt-5">
                    <h1 className="mb-2 text-md font-semibold tracking-tight text-gray-900 pt-3">
                        Title <span className="text-red-700">*</span>
                    </h1>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={newMovie.title}
                        onChange={handleInputChange}
                        className="block w-full p-4 text-sm text-gray-900 rounded border required"
                    />
                    <h1 className="mb-2 text-md font-semibold tracking-tight text-gray-900 pt-3">
                        Genre <span className="text-red-700">*</span>
                    </h1>
                    <input
                        type="text"
                        id="genre"
                        name="genre"
                        value={newMovie.genre}
                        onChange={handleInputChange}
                        className="block w-full p-4 text-sm text-gray-900 rounded border required"
                    />
                    <h1 className="mb-2 text-md font-semibold tracking-tight text-gray-900 pt-3">
                        Year <span className="text-red-700">*</span>
                    </h1>
                    <input
                        type="text"
                        id="year"
                        name="year"
                        value={newMovie.year}
                        onChange={handleInputChange}
                        className="block w-full p-4 text-sm text-gray-900 rounded border required"
                    />
                    <h1 className="mb-2 text-md font-semibold tracking-tight text-gray-900 pt-3">
                        Rating <span className="text-red-700">*</span>
                    </h1>
                    <input
                        type="number"
                        id="rating"
                        name="rating"
                        value={newMovie.rating}
                        onChange={handleInputChange}
                        max={10}
                        className="block w-full p-4 text-sm text-gray-900 rounded border required"
                    />
                    <h1 className="mb-2 text-md font-semibold tracking-tight text-gray-900 pt-3">
                        Director <span className="text-red-700">*</span>
                    </h1>
                    <input
                        type="text"
                        id="director"
                        name="director"
                        value={newMovie.director}
                        onChange={handleInputChange}
                        className="block w-full p-4 text-sm text-gray-900 rounded border required"
                    />
                    <h1 className="mb-2 text-md font-semibold tracking-tight text-gray-900 pt-3">
                        Writer <span className="text-red-700">*</span>
                    </h1>
                    <input
                        type="text"
                        id="writer"
                        name="writer"
                        value={newMovie.writer}
                        onChange={handleInputChange}
                        className="block w-full p-4 text-sm text-gray-900 rounded border required"
                    />
                    <h1 className="mb-2 text-md font-semibold tracking-tight text-gray-900 pt-3">
                        Cast <span className="text-red-700">*</span>
                    </h1>
                    <input
                        type="text"
                        id="cast"
                        name="cast"
                        value={newMovie.cast}
                        onChange={handleInputChange}
                        className="block w-full p-4 text-sm text-gray-900 rounded border required"
                    />
                    <h1 className="mb-2 text-md font-semibold tracking-tight text-gray-900 pt-3">
                        Summary <span className="text-red-700">*</span>
                    </h1>
                    <input
                        type="text"
                        id="summary"
                        name="summary"
                        value={newMovie.summary}
                        onChange={handleInputChange}
                        className="block w-full p-4 text-sm text-gray-900 rounded border required"
                    />
                    <h1 className="mb-2 text-md font-semibold tracking-tight text-gray-900 pt-3">
                        Image URL <span className="text-red-700">*</span>
                    </h1>
                    <input
                        type="text"
                        id="imageURL"
                        name="imageURL"
                        value={newMovie.imageURL}
                        onChange={handleInputChange}
                        className="block w-full p-4 text-sm text-gray-900 rounded border required"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-5 py-3 mt-5 rounded"
                >
                    Add Movie
                </button>
            </form>
        </div>
    );
};

export default AddMovies;
