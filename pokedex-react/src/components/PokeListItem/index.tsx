import React, { FC } from "react";
import styled from "styled-components";

interface StyledPokeListItemProps {
  backgroundImage: string;
};

export interface PokeListItemProps {
  sprite: string;
  onClick: (event?: any) => void;
}

const StyledPokeListItem = styled.button<StyledPokeListItemProps>`
  width: 120px;
  height: 120px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);
  margin: 10px;
  ${({ backgroundImage }) => `background-image: url(${backgroundImage});`}
  background-position: center;
  background-repeat: no-repeat;
`;

const PokeListItem: FC<PokeListItemProps> = ({ sprite, onClick }) => (
  <StyledPokeListItem backgroundImage={sprite} onClick={onClick} role="button"/>
);

export default PokeListItem;
