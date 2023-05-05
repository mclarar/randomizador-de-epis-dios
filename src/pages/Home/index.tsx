import { useState } from "react";
import { Serie, TvShowCard } from "../../components/TvshowCard";
import { series } from "../../data/series";

import styles from "./Home.module.css";
import { ResultCard } from "../../components/ResultCard";

import tv from "../../assets/126683-show-time-icon.gif";

export function Home() {
  const [seriado, setSeriado] = useState<Serie>({
    id: 0,
    nome: "",
    temporadas: [],
    photo: "",
    episodios: [],
  });

  function randomizarEpisodios(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function randomSeason(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <div className={styles.containerApp}>
      <h1 className={styles.title}>Escolha a série que deseja assitir</h1>
      <>
        <div className={styles.cardContainer}>
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
        </div>
      </>

      <ResultCard
        tvshowName={seriado.nome}
        season={randomSeason(1, 10)}
        episode={randomizarEpisodios(1, 20)}
      />
    </div>
  );
}
