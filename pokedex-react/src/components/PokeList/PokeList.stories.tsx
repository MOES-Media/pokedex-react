import React from 'react';
import { Meta, Story } from '@storybook/react';

import PokeList, {PokeListProps, Pokemon} from '.';

export default {
    title: "Components/PokeList",
    component: PokeList
} as Meta;

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

const Template: Story<PokeListProps> = (args) => <PokeList {...args} />;
export const Default = Template.bind({});
Default.args = {
    pokemons
};