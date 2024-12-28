import apiClient from "./apiClient";
import { MovieSearch, MovieResponse, MovieDetail } from "../types/movie";

export const fetchMovies = async (
  searchTerm: string = "",
  year: string = "",
  type: string = "movie",
  page: number = 1,
  limit: number = 10
): Promise<{ movies: MovieSearch[]; totalPages: number }> => {
  try {
    const response = await apiClient.get<MovieResponse>("", {
      params: {
        s: searchTerm || "Pokemon",
        y: year,
        type: type,
        page: page,
      },
    });

    if (response.data.Response === "True") {
      const totalResults = parseInt(response.data.totalResults, 10);
      const totalPages = Math.ceil(totalResults / limit);
      return {
        movies: response.data.Search || [],
        totalPages: totalPages,
      };
    } else {
      throw new Error("No movies found");
    }
  } catch (error) {
    // console.error("Error fetching movies:", error);
    return { movies: [], totalPages: 1 };
  }
};

export const fetchMovieDetails = async (
  id: string
): Promise<MovieDetail | null> => {
  try {
    const response = await apiClient.get("", {
      params: {
        i: id,
      },
    });

    if (response.data.Response === "True") {
      const movieDetail: MovieDetail = {
        imdbID: response.data.imdbID,
        Title: response.data.Title,
        Year: response.data.Year,
        Poster: response.data.Poster || undefined,
        Runtime: response.data.Runtime || undefined,
        Genre: response.data.Genre || undefined,
        Director: response.data.Director || undefined,
        Actors: response.data.Actors || undefined,
        imdbRating: response.data.imdbRating || undefined,
        Plot: response.data.Plot || undefined,
        Released: response.data.Released || undefined,
      };
      return movieDetail;
    } else {
      throw new Error("Failed to fetch movie details");
    }
  } catch (error) {
    // console.error("Error fetching movie details:", error);
    return null;
  }
};
