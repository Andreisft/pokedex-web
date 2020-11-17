import React, { memo } from "react";
import { IPokemonPayload} from "../../interfaces/pokemon";
import Card from "../Card";
import { Container } from "./styles";
import { useHistory } from "react-router-dom";

interface IProps {
  pokemons: IPokemonPayload[];
}

function PokemonList({ pokemons }: IProps) {
  const history = useHistory();

  const handleClick = (id: number) => {
    history.push(`/pokemon-detail/${id}`);
  };

  return (
    <Container>
      {pokemons.map((pokemon, idx) => (
        <Card key={idx} pokemon={pokemon} handleClick={handleClick} />
      ))}
    </Container>
  );
}

export default memo(PokemonList);
