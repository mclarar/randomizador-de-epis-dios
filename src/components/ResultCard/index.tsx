import styles from "./ResultCard.module.css";

import { i18next } from "../../translate/i18n";

interface ResultCardProps {
  tvshowName: string;
  season: any;
  episode: any;
}

export function ResultCard({ episode, season, tvshowName }: ResultCardProps) {
  return (
    <div className={styles.resultContainer}>
      <header className={styles.header}>{tvshowName}</header>
      <section className={styles.section}>
        <div className={styles.episodio}>{i18next.t('messages.episodio')}: {episode}</div>
        <div className={styles.temporada}>{i18next.t('messages.temporada')}: {season}</div>
      </section>
    </div>
  );
}
