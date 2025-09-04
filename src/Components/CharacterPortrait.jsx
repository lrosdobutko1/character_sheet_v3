import styled from "styled-components";
import { BasePanel } from "./BasePanel";

const CharacterPortraitPanel = styled(BasePanel)`
  height: 150px;
  width: 150px;
  border: 2px solid ${({ theme }) => theme.colors.highlight};
`;

export function CharacterPortrait() {
  return <CharacterPortraitPanel />;
};