import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchMovies, setSearchMovies] = useState([]);

  const fetchMovies = async () => {
    if (inputValue) {
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?s=${inputValue}&apikey=<your-movie-api-key>`
        );
        const jsonRes = await res.json();
        setSearchMovies(jsonRes);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <Navbar inputValues={{ inputValue, setInputValue, fetchMovies }} />
      <MovieCard values={{ searchMovies }} />
    </div>
  );
};

export default App;
