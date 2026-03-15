import { useEffect, useState } from "react";
import { fetchPodcasts } from "./api/fetchPodcasts";
import { genres } from "./data";
import Header from  "./components/Header";
import PodcastGrid from "./components/PodcastGrid";

export default function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    // original helper expected to receive the setters and manage state itself
    fetchPodcasts(setPodcasts, setError, setLoading);
  }, []);

  return (
    <main>
      <Header />

      {loading && (
        <div className="message-container">
          <div className="spinner"></div>
          <p>Loading podcasts...</p>
        </div>
      )}

      {error && (
        <div className="message-container">
          <div className="error">
            Error occurred while trying fetching podcasts: {error}
          </div>
        </div>
      )}

      {!loading && !error && (
        <PodcastGrid podcasts={podcasts} genres={genres} />
      )}
    </main>
  );
}