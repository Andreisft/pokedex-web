import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IPokemonPayload } from "../../interfaces/pokemon";
import {
  BaseStatsBox,
  Container,
  LargeCard,
  BaseStatsTitle,
  ProgressBox,
} from "./styles";
import axios from "axios";
import Progress from "../../components/Progress";

function PokemonDetail() {
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState<IPokemonPayload | null>(null);
  const { pokemonId } = useParams<{ pokemonId: string }>();

  const getPokemon = async () => {
    try {
      setLoading(true);
      if (pokemonId) {
        const { data } = await axios.get<IPokemonPayload>(
          `${process.env.REACT_APP_POKEMON_API_URL}/${pokemonId}` || ""
        );

        setPokemon(data);
        setLoading(false);
      } else {
        throw new Error();
      }
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <Container>
      {loading && "Carregando..."}
      {!loading && pokemon !== null && (
        <>
          <LargeCard viewTypes pokemon={pokemon} />
          <BaseStatsBox>
            <BaseStatsTitle>Base Stats</BaseStatsTitle>
            <ProgressBox>
              {pokemon.stats.map((e, idx) => (
                <Progress
                  key={idx}
                  title={e.stat.name}
                  completed={100}
                  total={200}
                />
              ))}
            </ProgressBox>
          </BaseStatsBox>
        </>
      )}
    </Container>
  );
}

export default PokemonDetail;
