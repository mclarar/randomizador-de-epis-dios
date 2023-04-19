import { useState } from "react";
import { Serie, TvShowCard } from "../../components/TvshowCard";
import { series } from "../../data/series";

import styles from "./Home.module.css";
import { ResultCard } from "../../components/ResultCard";

export function Home() {
  const [seriado, setSeriado] = useState<Serie>({
    id: 0,
    nome: "",
    temporadas: [] ,
    photo: "",
    episodios: []
  });

  const temporadas : number[]  = seriado.temporadas
  const temporadaRandomizada : number = Math.floor(Math.random() * temporadas.length);

  const episodios : number[]  = seriado.temporadas
  const episodioRandomizado : number = Math.floor(Math.random() * episodios.length);

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
      
      <ResultCard tvshowName={seriado.nome} season={temporadaRandomizada} episode={episodioRandomizado}/>
    </div>
  );
}
