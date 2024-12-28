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
    <div className="home-page">
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
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="pagination-button"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="pagination-text">
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="pagination-button"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;
