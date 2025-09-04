import styled from "styled-components";
import { BasePanel } from "./BasePanel";
import { RowContainer } from "./RowContainer";
import { StatCell } from "./StatCell";
import { BonusCell } from "./BonusCell";

const StatsPanel = styled(BasePanel)`
  width: 95%;
  height: fit-content;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export function Stats({ stats }) {
  const statKeys = ["str", "dex", "con", "int", "wis", "cha", "ini", "mov"];

  return (
    <StatsPanel>
      <RowContainer>
        {statKeys.map((key) => (
          <div key={key} style={{ flex: 1 }}>
            <StatCell>
              {stats[key].name}: {stats[key].stat}
              <BonusCell>
                {stats[key].bonus > 0 ? "+" : ""}
                {stats[key].bonus}
              </BonusCell>
            </StatCell>
          </div>
        ))}
      </RowContainer>
    </StatsPanel>
  );
}
