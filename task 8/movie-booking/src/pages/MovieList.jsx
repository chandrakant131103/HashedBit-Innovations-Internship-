import { Link } from "react-router-dom";
import movies from "../data/movies";

function MovieList() {
  return (
    <div className="grid">
      {movies.map((movie) => (
        <div className="card" key={movie.id}>
          <img
            src={movie.image}
            alt={movie.title}
          />

          <h3>{movie.title}</h3>

          <Link to={`/movie/${movie.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MovieList;