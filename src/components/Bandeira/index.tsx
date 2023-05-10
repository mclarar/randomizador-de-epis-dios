import styles from "./Bandeira.module.css";


interface BandeiraProps{
    imagem: string;
    onCllick?: () => void;
}

export function Bandeira ({imagem, onCllick}:BandeiraProps){
    return(
        <div className={styles.BandeiraContainer} onClick={onCllick}>
      <img className={styles.bandeiraImg} src={imagem} />
    </div>
    )
}