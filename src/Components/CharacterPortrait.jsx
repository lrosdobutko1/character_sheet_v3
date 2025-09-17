import styled from "styled-components";
import { BasePanel } from "./BasePanel";

const CharacterPortraitPanel = styled(BasePanel)`
  height: 150px;
  width: 150px;
`;

export function CharacterPortrait() {
  return <CharacterPortraitPanel />;
};