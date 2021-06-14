import React from 'react';
import { Story, Meta } from '@storybook/react';

import PokeListItem, {PokeListItemProps} from '.';

export default {
    title: "Components/PokeListItem",
    component: PokeListItem
} as Meta;

const Template: Story<PokeListItemProps> = (args) => <PokeListItem {...args} />
export const Default = Template.bind({});
Default.args = {
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
    onClick: () => {console.log("onclick")}
}