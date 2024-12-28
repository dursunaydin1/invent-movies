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
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search movies"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-bar-input"
    />
    <select
      value={year}
      onChange={(e) => setYear(e.target.value)}
      className="search-bar-select"
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
      className="search-bar-select"
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
