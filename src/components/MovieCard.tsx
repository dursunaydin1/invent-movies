import { useNavigate } from "react-router-dom";

const MovieCard = ({ title, releaseDate, imdbID, poster }: any) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${imdbID}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-gray-800 text-light rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
    >
      <img src={poster} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col justify-between">
        <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
        <div className="flex justify-between text-sm text-gray-200">
          <div>
            <p className="font-semibold">Release Date:</p>
            <p>{releaseDate}</p>
          </div>
          <div>
            <p className="font-semibold">IMDb ID:</p>
            <p>{imdbID}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
