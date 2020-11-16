import React from "react";
import { useParams } from "react-router-dom";

function PokemonDetail() {
  const { pokemonId } = useParams<{ pokemonId: string }>();

  return <h1>{pokemonId}</h1>;
}

export default PokemonDetail;
