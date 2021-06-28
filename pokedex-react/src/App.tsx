import React from "react";
import { PokeList } from "./components";
import { Pokemon } from "./components/PokeList";

const pokemons: Pokemon[] = [
  {
    id: 1,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },{
    id: 2,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
];

function App() {

  return (
    <div className="App">
      <PokeList pokemons={pokemons}/>      
    </div>
  );
}

export default App;
