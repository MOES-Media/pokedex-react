import React, { FC } from "react";
import styled from "styled-components";

type StyledPokeListItemProps = {
  active: boolean;
  backgroundImage: string;
};

export interface PokeListItemProps {
  active?: boolean;
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
  ${({ active }) => `background-color: ${active ? "red" : "white"};`}
`;

const PokeListItem: FC<PokeListItemProps> = ({ active = false, sprite, onClick }) => (
  <StyledPokeListItem active={active} backgroundImage={sprite} onClick={onClick} role="button"/>
);

export default PokeListItem;
