import React from "react";
import renderer from "react-test-renderer";

import PokeList, { Pokemon } from ".";

describe("Component: PokeList", () => {
  const testPokemons: Pokemon[] = [
    {
      id: 1,
      sprite: "foobar",
    },
    {
      id: 2,
      sprite: "foobar",
    },
  ];
  
  test("should render correctly", () => {
    const snapshot = renderer.create(<PokeList pokemons={testPokemons} />);
    expect(snapshot).toMatchSnapshot();
  });
});
