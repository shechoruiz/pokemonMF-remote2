import usePokemonData from "../hooks/usePokemonData";
import styles from "./pokemon2.module.css";

export default function Pokemon2() {
  const pokemonData = usePokemonData();

  if (!pokemonData) {
    return <div>Cargando pokemon...</div>;
  }

  return (
    <div className={`${styles.card} ${pokemonData.type}`}>
      <img
        src={pokemonData.image}
        alt={pokemonData.name}
        width={150}
        height={150}
      />
      <h2 className={styles.title}>{pokemonData.name}</h2>
    </div>
  );
}
