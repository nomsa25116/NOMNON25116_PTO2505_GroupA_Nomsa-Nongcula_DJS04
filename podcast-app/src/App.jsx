import { useEffect, useState } from "react";
import { fetchPodcasts } from "./api/fetchPodcasts";
import { genres } from "../../data";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import GenreFilter from "./components/GenreFilter";
import SortSelect from "./components/SortSelect";
import PodcastGrid from "./components/PodcastGrid";
import Pigination from "./components/Pigination";
import { PodcastProvider } from "./context/PodcastContext";

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
    <PodcastProvider initialPodcasts={podcasts}>
      <main>
        <Header />

        {!loading && !error && (
          <>
            <div className="controls-container">
              <SearchBar />
              <GenreFilter genres={genres} />
              <SortSelect />
            </div>
            <PodcastGrid genres={genres} />
            <Pigination />
          </>
        )}

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
      </main>
    </PodcastProvider>
  );
}