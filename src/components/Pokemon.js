const Pokemon = ({ pokemon, fetchPokemon }) => {
  const pokemonId = pokemon.url.slice(0, -1).split("/").pop();

  return (
    <div className="pokemon-border pokemon">
      <div className="pokemon-info">
        <div className="pokemon-name">{pokemon.name}</div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
          className="pokemon-image"
        />
      </div>
      <div className="pokemon-actions">
        <div className="pokemon-action-buttons">
          <button onClick={() => fetchPokemon(pokemon.url)}>View</button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
