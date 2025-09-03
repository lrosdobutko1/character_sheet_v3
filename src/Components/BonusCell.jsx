import styled from "styled-components";
import { BasePanel } from "./BasePanel";

export const BonusCell = styled(BasePanel)`
    width: fit-content;
    height: 20px;
    padding: 4px;
    border: 2px solid ${({ theme }) => theme.colors.border};
    border-radius: 50%;
    `