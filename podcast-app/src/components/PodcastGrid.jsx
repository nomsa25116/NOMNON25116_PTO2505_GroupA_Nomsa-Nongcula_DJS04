import PodcastCard from "./PodcastCard";


export default function PodcastGrid({ podcasts, genres }) {
  return (
    <div className="grid">
      {podcasts.map((podcast) => (
        <PodcastCard key={podcast.id} podcast={podcast} genres={genres} />
      ))}
    </div>
  );
}