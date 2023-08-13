import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import StarredMovies from "./pages/StarredMovies";
import Watchlist from "./pages/Watchlist";
import AddMovies from "./pages/AddMovies";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movieDetails/:id" element={<MovieDetails />} />
                <Route path="/starredMovies" element={<StarredMovies />} />
                <Route path="/watchList" element={<Watchlist />} />
                <Route path="/add" element={<AddMovies />} />
            </Routes>
        </>
    );
}

export default App;
