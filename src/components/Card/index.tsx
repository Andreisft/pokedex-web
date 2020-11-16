import React, { memo } from "react";
import { Container, Name, Image } from "./styles";
import { IPokemonPayload } from "../../interfaces/pokemon";

interface IProps {
  pokemon: IPokemonPayload;
  handleClick: (id: number) => void;
}

function Card({ pokemon, handleClick }: IProps) {
  return (
    <Container onClick={() => handleClick(pokemon.id)}>
      <Image url={pokemon.sprites.front_default} />
      <Name>{pokemon.name}</Name>
    </Container>
  );
}

export default memo(Card);
