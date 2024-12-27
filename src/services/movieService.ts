import axios from "axios";
import { MovieSearch, MovieResponse, MovieDetail } from "../types/movie";

const API_KEY = process.env.OMDB_API_KEY || "6b1213bb";

export const fetchMovies = async (
  searchTerm: string = "",
  year: string = "",
  type: string = "movie",
  page: number = 1,
  limit: number = 10
): Promise<{ movies: MovieSearch[]; totalPages: number }> => {
  try {
    const response = await axios.get<MovieResponse>(
      "https://www.omdbapi.com/",
      {
        params: {
          s: searchTerm || "Pokemon",
          y: year,
          type: type,
          page: page,
          apiKey: API_KEY,
        },
      }
    );

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
    console.error("Error fetching movies:", error);
    return { movies: [], totalPages: 1 };
  }
};

export const fetchMovieDetails = async (
  id: string
): Promise<MovieDetail | null> => {
  try {
    const response = await axios.get("https://www.omdbapi.com/", {
      params: {
        i: id,
        apiKey: API_KEY,
      },
    });

    if (response.data.Response === "True") {
      const movieDetail: MovieDetail = {
        imdbID: response.data.imdbID,
        Title: response.data.Title,
        Year: response.data.Year,
        Poster: response.data.Poster || undefined,
      };
      return movieDetail;
    } else {
      throw new Error("Failed to fetch movie details");
    }
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};
