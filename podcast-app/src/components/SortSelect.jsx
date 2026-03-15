import { useContext } from "react";
import { PodcastContext, SORT_OPTIONS } from "../context/PodcastContext";

export default function SortSelect() {
    const { sortKey, setSortKey } = useContext(PodcastContext);

    return (
        <div className="sort-container">
            <select
                value={sortKey}
                onChange={(e) => setSortKey(e.target.value)}
                className="sort-select"
            >
                {SORT_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}