import { useState } from "react";
import { Serie, TvShowCard } from "../../components/TvshowCard";
import { series } from "../../data/series";

import styles from "./Home.module.css";

export function Home() {
  const [seriado, setSeriado] = useState<Serie>({
    id: 0,
    nome: "",
    temporadas: [],
    photo: "",
  });

  return (
    <div className={styles.containerApp}>
      <h1 className={styles.title}>Escolha a série que deseja assitir</h1>
      <>
        {series.map((serie) => {
          return (
            <TvShowCard
              key={serie.id}
              serie={serie}
              onCllick={() => {
                setSeriado(serie);
                console.log(serie);
              }}
            />
          );
        })}
      </>
    </div>
  );
}
