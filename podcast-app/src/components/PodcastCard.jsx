export default function PodcastCard({ podcast, genres }) {
  const {
    title,
    name,
    image,
    seasons,
    updated,
    genre
  } = podcast;

  const podcastTitle = title || name;
  const podcastGenres = genres || genre || [];
  const lastUpdated = updated ? new Date(updated).toLocaleDateString() : "N/A";

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
          <strong>Genres:</strong> {
            Array.isArray(podcastGenres) 
              ? podcastGenres.join(", ")
              : podcastGenres
          }
        </p>
      )}
      
      <p className="podcast-updated">
        <strong>Last Updated:</strong> {lastUpdated}
      </p>
    </div>
  );
}