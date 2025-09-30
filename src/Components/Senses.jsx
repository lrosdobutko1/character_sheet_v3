import styled from "styled-components";
import { BasePanel } from "./BasePanel";
import { StatCell } from "./StatCell";
import { BonusCell } from "./BonusCell";
import { darkVisionRange, passiveSenses } from "../Data/characterData";

const SensesPanel = styled(BasePanel)`
  border: 1px solid ${({ theme }) => theme.colors.border_highlight};
  width: 95%;
  height: 30%;
  min-height: 150px;
  display: grid;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export function Senses() {
  return (
    <SensesPanel style={{ padding: "4px" }}>
      {Object.values(passiveSenses).map((sense) => (
        <StatCell
          key={sense.name}
          style={{
            display: "flex",
            width: "100%",
            margin: "0px",
            padding: "0px",
          }}
        >
          <div style={{ flex: 1, textAlign: "left" }}>{sense.name}:</div>
          <div style={{ flexShrink: 0, textAlign: "right" }}>
            <BonusCell>{sense.value}</BonusCell>
          </div>
        </StatCell>
      ))}
      {darkVisionRange > 0 && (
        <StatCell
          style={{
            display: "flex",
            width: "100%",
            margin: "0px",
            padding: "0px",
          }}
        >
          <div style={{ flex: 1, textAlign: "left" }}>Darkvision:</div>
          <div style={{ flexShrink: 0, textAlign: "right" }}>
            <BonusCell>{darkVisionRange}</BonusCell>
          </div>
        </StatCell>
      )}
    </SensesPanel>
  );
}
