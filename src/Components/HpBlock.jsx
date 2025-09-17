import styled from "styled-components";
import { BasePanel } from "./BasePanel";


const HpBlockPanel = styled(BasePanel)`
    border: 1px solid ${({ theme }) => theme.colors.border_highlight};
    width: 450px;
    height: 105px;
    text-align: center;
    border-radius: 8px;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    `;

    
export function HpBlock({ hitPoints }) {
  return (
    <HpBlockPanel>
      <span>Hit Points: <strong>{hitPoints}</strong></span>
    </HpBlockPanel>
  )
};