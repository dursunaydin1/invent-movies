import { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import { fetchMovies } from "../services/movieService";
import LogoWithTitle from "../components/LogoWithTitle";
import SearchBar from "../components/SearchBar";
import { MovieDetail } from "../types/movie";

const HomePage = () => {
  const [movies, setMovies] = useState<MovieDetail[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [type, setType] = useState<"movie" | "series" | "episode" | "">("");
  const [years, setYears] = useState<string[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const { movies } = await fetchMovies(searchTerm || "Pokemon", year, type);

      const moviesWithPoster = movies.map((movie: MovieDetail) => ({
        ...movie,
        Poster: movie.Poster || "",
      }));

      setMovies(moviesWithPoster);
    };

    const getYears = async () => {
      const { movies: yearsData } = await fetchMovies(
        searchTerm || "Pokemon",
        "",
        type
      );
      const yearsList = [...new Set(yearsData.map((movie) => movie.Year))];
      setYears(yearsList);
    };

    getMovies();
    getYears();
  }, [searchTerm, year, type]);

  return (
    <div className="bg-dark text-light p-8">
      <LogoWithTitle />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        year={year}
        setYear={setYear}
        years={years}
        type={type}
        setType={setType}
      />
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
