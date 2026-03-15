import { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";

export default function GenreFilter({ genres }) {
  const { genre, setGenre } = useContext(PodcastContext);

  return (
    <div className="filter-container">
      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="genre-select"
      >
        <option value="all">All Genres</option>
        {genres.map((g) => (
          <option key={g.id} value={g.id}>
            {g.title}
          </option>
        ))}
      </select>
    </div>
  );
}