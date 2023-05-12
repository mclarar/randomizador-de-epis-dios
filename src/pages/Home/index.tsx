import { ChangeEvent, useState } from "react";
import styles from "./Home.module.css";

import { Serie, TvShowCard } from "../../components/TvshowCard";
import { ResultCard } from "../../components/ResultCard";
import { Bandeira } from "../../components/Bandeira";

import { series } from "../../data/series";

import { i18next } from "../../translate/i18n";

export function Home() {
  const I18N_STORAGE_KEY = "i18nextLng";
  const [showCard, setShowCard] = useState<boolean>(false);
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

  function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    localStorage.setItem(I18N_STORAGE_KEY, event.target.value);
    window.location = window.location;
    console.log(event.target.value);
  }

  return (
    <div className={styles.containerApp}>
      <div className={styles.selectIdiomas}>
        <select onChange={handleSelectChange}>
          <option>Escolha um idioma</option>
          <option value="pt-BR">PT</option>
          <option value="en-US">EN</option>
          <option value="es">ES</option>
          <option value="fr-FR">FR</option>
        </select>
        {/* <Bandeira imagem="/bandeiras/brasil.png" onCllick={}></Bandeira> */}
      </div>
      <h1 className={styles.title}>{i18next.t("titles.app")}</h1>
      <>
        <div className={styles.cardContainer}>
          {series.map((serie) => {
            return (
              <TvShowCard
                key={serie.id}
                serie={serie}
                onCllick={() => {
                  setSeriado(serie);
                  setShowCard(true);
                  console.log(serie);
                }}
              />
            );
          })}
        </div>
      </>
      {showCard && (
        <ResultCard
          tvshowName={seriado.nome}
          season={randomSeason(1, 10)}
          episode={randomizarEpisodios(1, 20)}
        />
      )}
    </div>
  );
}
