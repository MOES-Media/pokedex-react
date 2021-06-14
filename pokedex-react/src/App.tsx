import React from "react";
import { PokeListItem } from "./components";

type Pokemon = {
  sprite: string;
};

const pokemons: Pokemon[] = [
  {
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
  },{
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
  },
];

function App() {

  const handlePokeListItemClick = () => {
    console.log("you have clicked a poke list item!");
  }

  return (
    <div className="App">
      {pokemons.map((pokemon: Pokemon) => (
        <PokeListItem sprite={pokemon.sprite} onClick={handlePokeListItemClick}/>
      ))}
    </div>
  );
}

export default App;
