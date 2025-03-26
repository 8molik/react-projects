import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();
  console.log(favorites)
  if (favorites.length > 0) {
    return (
      <div className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>No Favorite movies yet</h2>
      <p>Add some favorites movies</p>
    </div>
  );
}

export default Favorites;
