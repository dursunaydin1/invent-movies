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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const getMovies = async () => {
      const { movies, totalPages } = await fetchMovies(
        searchTerm || "Pokemon",
        year,
        type,
        currentPage
      );

      const moviesWithPoster = movies.map((movie: MovieDetail) => ({
        ...movie,
        Poster: movie.Poster || "",
      }));

      setMovies(moviesWithPoster);
      setTotalPages(totalPages);
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
  }, [searchTerm, year, type, currentPage]);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-dark text-light p-8 flex flex-col items-center">
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
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="bg-primary text-white px-4 py-2 rounded-lg disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-white">
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="bg-primary text-white px-4 py-2 rounded-lg disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;
