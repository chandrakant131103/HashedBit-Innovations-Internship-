import { useParams, Link } from "react-router-dom";
import movies from "../data/movies";

function MovieDetails() {
  const { id } = useParams();

  const movie = movies.find(
    (m) => m.id === Number(id)
  );

  if (!movie) {
    return <h2>Movie Not Found</h2>;
  }

  return (
    <div className="details">
      <h2>{movie.title}</h2>

      <img
        src={movie.image}
        alt={movie.title}
      />

      <p>{movie.description}</p>

      <br />

      <Link to={`/book/${movie.id}`}>
        <button>Book Seat</button>
      </Link>
    </div>
  );
}

export default MovieDetails;