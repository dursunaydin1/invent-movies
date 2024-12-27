import React from "react";
import { SearchBarProps } from "../types/movie";

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  year,
  setYear,
  years,
  type,
  setType,
}) => (
  <div className="flex flex-wrap gap-4 mb-6">
    <input
      type="text"
      placeholder="Search movies"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="p-2 border rounded-md w-full sm:w-auto max-w-xs text-black"
    />
    <select
      value={year}
      onChange={(e) => setYear(e.target.value)}
      className="p-2 border rounded-md w-full sm:w-auto max-w-xs text-black"
    >
      <option value="" disabled>
        Select Year
      </option>
      <option value="all">All Years</option>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
    <select
      value={type}
      onChange={(e) =>
        setType(e.target.value as "movie" | "series" | "episode" | "")
      }
      className="p-2 border rounded-md w-full sm:w-auto max-w-xs text-black"
    >
      <option value="" disabled>
        Please Select a Type
      </option>
      <option value="movie">Movies</option>
      <option value="series">TV Series</option>
      <option value="episode">TV Episodes</option>
    </select>
  </div>
);

export default SearchBar;
