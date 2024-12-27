export interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  year: string;
  setYear: (value: string) => void;
  years: string[];
  type: "movie" | "series" | "episode" | "";
  setType: (value: "movie" | "series" | "episode" | "") => void;
}

export interface MovieDetail {
  imdbID: string;
  Title: string;
  Year: string;
  Poster?: string;
}

export interface MovieSearch {
  Year: string;
  Title: string;
  imdbID: string;
  Type: string;
}

export interface MovieResponse {
  Search: MovieSearch[];
  totalResults: string;
  Response: string;
}
