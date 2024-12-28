import { useNavigate } from "react-router-dom";

const MovieCard = ({ title, releaseDate, imdbID, poster }: any) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${imdbID}`);
  };

  return (
    <div onClick={handleClick} className="movie-card">
      <img src={poster} alt={title} className="movie-card-img" />
      <div className="movie-card-content">
        <h2 className="movie-card-title">{title}</h2>
        <div className="movie-card-details">
          <div className="movie-card-detail">
            <p className="font-semibold">Release Date:</p>
            <p>{releaseDate}</p>
          </div>
          <div className="movie-card-detail">
            <p className="font-semibold">IMDb ID:</p>
            <p>{imdbID}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
