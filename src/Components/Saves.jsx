import styled from "styled-components";
import { BasePanel } from "./BasePanel";
import { StatCell } from "./StatCell";
import { BonusCell } from "./BonusCell";

const SavePanel = styled(BasePanel)`
  border: 1px solid ${({ theme }) => theme.colors.border_highlight};
  width: 95%;
  min-height: 150px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, auto);
  gap: 4px;
`;

export function Saves({ stats }) {
  const statKeys = ["str", "dex", "con", "int", "wis", "cha"];
  return (
    <SavePanel>
      <div
        style={{
          gridColumn: "1 / span 2",
          fontWeight: "bold",
          marginBottom: "4px",
        }}
      >
        Saves:
      </div>
      {statKeys.map((key) => (
        <StatCell key={key}>
          {stats[key].name.slice(0, 3)}:
          <BonusCell>
            {stats[key].bonus > 0 ? "+" : ""}
            {stats[key].bonus}
          </BonusCell>
        </StatCell>
      ))}
    </SavePanel>
  );
}
