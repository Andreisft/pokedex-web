import React, { HTMLProps, memo } from "react";
import { Container, Name, Image, Type } from "./styles";
import { IPokemonPayload } from "../../interfaces/pokemon";

interface IProps extends HTMLProps<HTMLDivElement> {
  pokemon: IPokemonPayload;
  viewTypes?: boolean;
  handleClick?: (id: number) => void;
}

function Card({ pokemon, viewTypes, handleClick, className }: IProps) {
  return (
    <Container
      className={className}
      onClick={() => handleClick && handleClick(pokemon.id)}
    >
      <Image url={pokemon.sprites.front_default} />
      <Name>{pokemon.name}</Name>
      {viewTypes &&
        pokemon.types.map((e) => <Type key={e.slot}>{e.type.name}</Type>)}
    </Container>
  );
}

export default memo(Card);
