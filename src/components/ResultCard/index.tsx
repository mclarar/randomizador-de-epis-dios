import styles from "./ResultCard.module.css";
import { series } from "../../data/series";

interface ResultCardProps {
  tvshowName: string;
  season: number;
  episode: number;
}

export function ResultCard({ episode, season, tvshowName }: ResultCardProps) {
  return (
    <div className={styles.resultContainer}>
      <header className={styles.header}>{tvshowName}</header>
      <section className={styles.section}>
        <div className={styles.episodio}>episodio {episode}</div>
        <div className={styles.temporada}>temporada{season}</div>
      </section>
    </div>
  );
}
