import styled from "styled-components";
import { BasePanel } from "./BasePanel";
import { characterClass } from "../Data/data";
import { CharacterPortrait } from "./CharacterPortrait";

const CharacterInfoPanel = styled(BasePanel)`
  width: 95%;
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
            Name: {characterInformation.name} Level{" "}
            {characterInformation.characterLevel}{" "}
            {characterInformation.characterGender}{" "}
            {characterInformation.characterRace}{" "}
          </div>
          <div>
            Class:{" "}
            {Object.values(characterClass).map((cls, index) => (
              <span key={index}>
                {cls.class} {cls.subclass} (Level {cls.classLevel})
                {index < Object.values(characterClass).length - 1 ? ", " : ""}
              </span>
            ))}
          </div>
        </div>
        <CharacterPortrait />
      </CharacterInfoPanel>
    </>
  );
}
