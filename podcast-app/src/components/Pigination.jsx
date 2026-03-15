import { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";
import styles from "./Pigination.module.css";

/**
 * Numeric pigination
 */

export default function Pigination() {
    const { page, setPage, totalPages } = useContext(PodcastContext);

    if (totalPages <= 1) return null;

    /**Build page */
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className={styles.piginationWrapper}>
            {pages.map((p) => (
                <button
                    key={p}
                    className={`${styles.pageButton} ${p === page ? styles.active : ""}`}
                    onClick={() => setPage(p)}
                >
                    {p}
                </button>
            ))}
        </div>
    );
}