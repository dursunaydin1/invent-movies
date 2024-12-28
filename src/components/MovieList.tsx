import MovieCard from "./MovieCard";
import { MovieDetail } from "../types/movie";

const MovieList = ({ movies }: { movies: MovieDetail[] }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie-list-item">
          <MovieCard
            title={movie.Title}
            releaseDate={movie.Year}
            imdbID={movie.imdbID}
            poster={movie.Poster}
          />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
