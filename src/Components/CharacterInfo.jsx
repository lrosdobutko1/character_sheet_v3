import styled from "styled-components";
import { BasePanel } from "./BasePanel";
import { characterClass, hitPoints } from "../Data/data";
import { CharacterPortrait } from "./CharacterPortrait";
import { HpBlock } from "./HpBlock";

const CharacterInfoPanel = styled(BasePanel)`
  border: 1px solid ${({ theme }) => theme.colors.border_highlight};
  width: 99%;
  height: fit-content;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-align: left;
  /* flexbox layout */
  display: flex;
  flex-direction: row; /* place children side by side */
  align-items: flex-start; /* align portrait to top of text */
  gap: 16px; /* optional spacing between text and portrait */
`;

export function CharacterInfo({ characterInformation }) {
  return (
    <>
      <CharacterInfoPanel>
        <div>
          <div>
            <strong>Name:</strong> {characterInformation.name}, Level{" "}
            <strong>{characterInformation.characterLevel}</strong>{" "}
            {characterInformation.characterGender}{" "}
            {characterInformation.characterRace}{" "}
          </div>
          <div>
            <strong>Class:</strong>{" "}
            {Object.values(characterClass).map((cls, index) => (
              <span key={index}>
                {cls.class} {cls.subclass} (Level <strong>{cls.classLevel}</strong>)
                {index < Object.values(characterClass).length - 1 ? ", " : ""}
              </span>
            ))}
          </div>
          <HpBlock hitPoints={hitPoints} />
        </div>
        <CharacterPortrait />
      </CharacterInfoPanel>
    </>
  );
}
