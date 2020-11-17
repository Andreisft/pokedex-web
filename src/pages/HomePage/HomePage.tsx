import React, { useEffect, useState } from "react";

import { Container } from "./styles";
import { IPokemonsPayload, IPokemonPayload } from "../../interfaces/pokemon";
import PokemonList from "../../components/PokemonList";
import axios from "axios";

function HomePage() {
  const [pokemons, setPokemons] = useState<IPokemonPayload[]>([]);

  const getPokemons = async () => {
    try {
      const { data: pokemonPayload } = await axios.get<IPokemonsPayload>(
        process.env.REACT_APP_POKEMON_API_URL || ""
      );

      const pokemons: IPokemonPayload[] = [];

      await Promise.all(
        pokemonPayload.results.map(async (e) => {
          const { data: pokemon } = await axios.get<IPokemonPayload>(e.url);
          pokemons.push(pokemon);
        })
      );

      setPokemons(pokemons);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <Container>
      <PokemonList pokemons={pokemons} />
    </Container>
  );
}

export default HomePage;
