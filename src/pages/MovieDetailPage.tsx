import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMovieDetails } from "../services/movieService";
import "../styles/styles.scss";

const MovieDetailPage = () => {
  const { imdbID } = useParams<{ imdbID: string }>();
  const [movie, setMovie] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovieDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchMovieDetails(imdbID || "");
        setMovie(data);
      } catch (err) {
        setError("Failed to load movie details.");
      } finally {
        setLoading(false);
      }
    };

    if (imdbID) {
      getMovieDetails();
    }
  }, [imdbID]);

  if (loading) {
    return (
      <div className="bg-dark text-light p-8 flex justify-center items-center min-h-screen">
        <div className="flex flex-col items-center">
          {/* Spinner veya Loading animasyonu */}
          <div
            className="spinner-border animate-spin inline-block w-16 h-16 border-4 border-t-4 border-gray-200 rounded-full mb-4"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
          <h1 className="text-4xl font-bold">Loading...</h1>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-dark text-light p-8 flex justify-center items-center min-h-screen">
        <h1 className="text-4xl font-bold">{error}</h1>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="bg-dark text-light p-8 flex justify-center items-center min-h-screen">
        <h1 className="text-4xl font-bold">Movie not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-dark text-light p-8 flex flex-col items-center">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-2/3">
        <h1 className="text-4xl font-bold mb-4 text-center">{movie.Title}</h1>
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="movie-poster" /* Yeni stil sınıfı */
        />
        <div className="space-y-4">
          <p>
            <strong>Duration:</strong> {movie.Runtime}
          </p>
          <p>
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p>
            <strong>Director:</strong> {movie.Director}
          </p>
          <p>
            <strong>Cast:</strong> {movie.Actors}
          </p>
          <p>
            <strong>IMDb Rating:</strong> {movie.imdbRating}
          </p>
          <p>
            <strong>Plot:</strong> {movie.Plot}
          </p>
          <p>
            <strong>Release Date:</strong> {movie.Released}
          </p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default MovieDetailPage;
