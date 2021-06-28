import React from "react";
import renderer from 'react-test-renderer';

import PokeList, { Pokemon } from ".";

const mockPokemons: Pokemon[] = [
  {
    id: 1,
    sprite: "foobar",
  },
  {
    id: 2,
    sprite: "foobar",
  },
];

test("Component: PokeList should render correctly", () => {
    const snapshot = renderer.create(<PokeList pokemons={mockPokemons} />);
    expect(snapshot).toMatchSnapshot();
});