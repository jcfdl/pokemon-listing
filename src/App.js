import { useState, useEffect } from "react";

import ActivePokemon from "./components/ActivePokemon";
import Header from "./components/Header";
import Pokemons from "./components/Pokemons";
import Footer from "./components/Footer";

function App() {
  const pokeApi = "https://pokeapi.co/api/v2/pokemon";
  const [pokemons, setPokemons] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [pokemon, setPokemon] = useState([]);
  const [showPokemon, setShowPokemon] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      const pokemonList = await fetchPokemons();
      setPokemons(pokemonList.results);
      setTotalCount(pokemonList.count);
    };

    getPokemons();
  }, []);

  // Fetch Pokemons
  const fetchPokemons = async (limit = 30, offset = 0) => {
    const res = await fetch(`${pokeApi}?limit=${limit}&offset=${offset}`, {
      method: "GET",
    });
    const data = await res.json();

    return data;
  };

  // Fetch Pokemon
  const fetchPokemon = async (url) => {
    const res = await fetch(url, { method: "GET" });
    const data = await res.json();

    setPokemon(data);
    setShowPokemon(true);
  };

  return (
    <div id="app">
      <ActivePokemon
        pokemon={pokemon}
        showPokemon={showPokemon}
        closeActive={() => setShowPokemon(!showPokemon)}
      />
      <Header />
      <Pokemons pokemons={pokemons} fetchPokemon={fetchPokemon} />
      <Footer />
    </div>
  );
}

export default App;
