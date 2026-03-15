export default function PodcastCard({ podcast, genres }) {
  const {
    title,
    name,
    image,
    seasons,
    updated,
    genres: podcastGenreIds
  } = podcast;

  const podcastTitle = title || name;
  const lastUpdated = updated ? new Date(updated).toLocaleDateString() : "N/A";

  // Map genre IDs to genre names
  const podcastGenres = podcastGenreIds && genres
    ? podcastGenreIds.map(id => {
        const genreObj = genres.find(g => g.id === id);
        return genreObj ? genreObj.title : `Genre ${id}`;
      })
    : [];

  return (
    <div className="podcast-card">
      {image && <img src={image} alt={podcastTitle} className="podcast-image" />}

      <h3 className="podcast-title">{podcastTitle}</h3>

      {seasons && (
        <p className="podcast-seasons">
          <strong>Seasons:</strong> {seasons}
        </p>
      )}

      {podcastGenres && podcastGenres.length > 0 && (
        <p className="podcast-genres">
          <strong>Genres:</strong> {podcastGenres.join(", ")}
        </p>
      )}

      <p className="podcast-updated">
        <strong>Last Updated:</strong> {lastUpdated}
      </p>
    </div>
  );
}