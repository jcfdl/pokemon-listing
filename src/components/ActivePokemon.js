const ActivePokemon = ({ pokemon, showPokemon, closeActive }) => {
  const pokemonTypes = () => {
    let list = pokemon.types.map((item) => {
      return item.type.name;
    });

    return list.join(", ");
  };

  const pokemonAbilities = () => {
    let list = pokemon.abilities.map((item) => {
      return item.ability.name;
    });

    return list.join(", ");
  };

  const pokemonStats = () => {
    let list = pokemon.stats.map((item) => {
      return `${item.stat.name}: ${item.base_stat}`;
    });

    return list.join(" | ");
  };

  return (
    <div className={`show-pokemon ${showPokemon ? "is-active" : ""}`}>
      <div className="pokemon-border active-pokemon">
        {showPokemon ? (
          <>
            <img
              src={pokemon.sprites.front_default}
              className="pokemon-image"
            />
            <p className="text-center pokemon-name">{pokemon.name}</p>
            <small>Stats: {pokemonStats()}</small>
            <small>Type: {pokemonTypes()}</small>
            <small>Abilities: {pokemonAbilities()}</small>
            <div className="action-buttons">
              <button onClick={() => closeActive()}>Close</button>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ActivePokemon;
