import { useContext } from "react";
import { PodcastContext, SORT_OPTIONS } from "../context/PodcastContext";

export default function SortSelect() {
    const { sortKey, setSortkey } = useContext(PodcastContext);

    return (
        <div className="sort-container">
            <select
                value={sortKey}
                onChange={(e) => setSortkey(e.target.value)}
                className="sort-select"
            >
                {SORT_OPTIONS.map((option) => (
                    <option key={option.key} value={option.key}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}