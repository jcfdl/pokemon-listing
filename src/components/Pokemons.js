import Pokemon from "./Pokemon";

const Pokemons = ({ pokemons, fetchPokemon }) => {
  return (
    <>
      {pokemons.length ? (
        <div className="pokemon-list">
          {pokemons.map((pokemon, index) => (
            <Pokemon
              pokemon={pokemon}
              key={index}
              fetchPokemon={fetchPokemon}
            />
          ))}
        </div>
      ) : (
        <p style={{ margin: "50px auto" }} className="text-center">
          No pokemons found!
        </p>
      )}
    </>
  );
};

export default Pokemons;
