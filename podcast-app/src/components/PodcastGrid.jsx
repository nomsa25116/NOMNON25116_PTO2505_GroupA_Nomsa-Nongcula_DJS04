import { useContext } from 'react';
import { PodcastCard } from './PodcastCard';
import { PodcastContext } from '../context/PodcastContext';

export default function PodcastGrid( genres) {
    const { podcasts } = useContext(PodcastContext);

    return (
        <div className="grid">
            {podcasts.map((podcast) => (
                <PodcastCard key={podcast.id} podcast={podcast} genres={genres} />
            ))}
        </div>
    );
}