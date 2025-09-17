import styled from "styled-components";
import { BasePanel } from "./BasePanel";
import { StatCell } from "./StatCell";
import { BonusCell } from "./BonusCell";

export const SkillsPanel = styled(BasePanel)`
  border: 1px solid ${({ theme }) => theme.colors.border_highlight};
  width: 30%;
  min-width: 200px;
  height: fit-content;
`;

export function Skills({ skills }) {
  return (
        <SkillsPanel style={{ padding: "4px" }}>
      {Object.values(skills).map((skill) => (
        <StatCell
          key={skill.name}
          style={{
            display: "flex",
            width: "100%",
            margin: "0px",
            padding: "0px",
          }}
        >
          <div style={{ flex: 1, textAlign: "left" }}>{skill.name}:</div>
          <div style={{ flexShrink: 0, textAlign: "right" }}>
            <BonusCell>{skill.stat < 0 ? "" : "+"}{skill.stat + (skill.expert ? skill.stat * 2 : skill.proficient ? skill.stat : 0)}</BonusCell>
          </div>
        </StatCell>
      ))}
    </SkillsPanel>
  );
}