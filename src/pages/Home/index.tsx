import { useState } from "react";
import { Serie, TvShowCard } from "../../components/TvshowCard";
import { series } from "../../data/series";

import styles from "./Home.module.css";
import { ResultCard } from "../../components/ResultCard";

export function Home() {
  const [seriado, setSeriado] = useState<Serie>({
    id: 0,
    nome: "",
    temporadas: [],
    photo: "",
    episodios: [],
  });

  // const temporadas: number[] = seriado.temporadas;
  // const temporadaRandomizada: number = Math.floor(
  //   Math.random() * temporadas.length
  // );

  // const episodios: number[] = seriado.temporadas;
  // const episodioRandomizado: number = Math.floor(
  //   Math.random() * episodios.length
  // );


  function randomizarEpisodios(min: number, max: number){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function randomSeason(min: number, max: number){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
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

      <ResultCard
        tvshowName={seriado.nome}
        season={randomSeason(1,20)}
        episode={randomizarEpisodios(1,20)}
      />
    </div>
  );
}
