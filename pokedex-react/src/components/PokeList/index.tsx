import React, { FC } from "react";
import styled from "styled-components";
import PokeListItem from "./../PokeListItem";

export interface Pokemon {
  id: number;
  sprite: string;
}

export interface PokeListProps {
  pokemons: Pokemon[];
}

const StyledPokeList = styled.div`
  background-color: #bff9ff;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

const handlePokeListItemClick = () => {
  console.log("you have clicked a poke list item!");
};

const PokeList: FC<PokeListProps> = ({ pokemons }) => (
  <StyledPokeList>
    {pokemons.map((pokemon: Pokemon) => (
      <PokeListItem
        sprite={pokemon.sprite}
        onClick={handlePokeListItemClick}
        key={pokemon.id}
      />
    ))}
  </StyledPokeList>
);

export default PokeList;
