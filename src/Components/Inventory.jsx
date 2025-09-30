import styled from "styled-components";
import { BasePanel } from "./BasePanel";
import { weaponTypes } from "../Data/characterData";

export const Inventory = styled(BasePanel)`
  width: 35%;
  min-width: 200px;
  height: fit-content;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border_highlight};

`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: ${({ theme }) => theme.fontSizes.small || "14px"};
`;

const Th = styled.th`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border_highlight || "#ccc"};
  text-align: left;
  padding: 4px 8px;
`;

const Td = styled.td`
  padding: 4px 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border || "#eee"};
`;
/*
export function InventoryTable() {
  return (
    <Inventory>
      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Dmg Type</Th>
            <Th>Range</Th>
            <Th>Damage (1H)</Th>
            <Th>Damage (2H)</Th>
          </tr>
        </thead>
        <tbody>
          {Object.values(weaponTypes).map((weapon) => (
            <tr key={weapon.label}>
              <Td>{weapon.label}</Td>
              <Td>
                {Object.entries(weapon.damageType)
                  .filter(([_, v]) => v)
                  .map(([k]) => k.charAt(0).toUpperCase() )
                  .join(", ")}
              </Td>
              <Td>{weapon.range}</Td>
              <Td>
                {weapon.damageDie.oneHand.number}d{weapon.damageDie.oneHand.die}
              </Td>
              <Td>
                {weapon.damageDie.twoHand.number}d{weapon.damageDie.twoHand.die}
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Inventory>
  );
}*/

export function InventoryTable({equipmentData, isLoading}) {
    if (isLoading) {
    return (
      <Inventory>
        <p>Loading equipment data...</p>
      </Inventory>
    );
  }

  return (
    <Inventory>
      <p>equipment data gets printed out here</p>

      <span>{JSON.stringify(equipmentData.find(item => item.index === "dagger"), null, 2)}</span>
      <span>{JSON.stringify(equipmentData.find(item => item.index === "longsword"), null, 2)}</span>

    </Inventory>

  );
};