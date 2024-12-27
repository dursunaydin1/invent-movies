import MovieCard from "./MovieCard";
import { MovieDetail } from "../types/movie";

const MovieList = ({ movies }: { movies: MovieDetail[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          title={movie.Title}
          releaseDate={movie.Year}
          imdbID={movie.imdbID}
          poster={movie.Poster}
        />
      ))}
    </div>
  );
};

export default MovieList;
