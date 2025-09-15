import styled from "styled-components";
import { BasePanel } from "./BasePanel";

export const StatCell = styled(BasePanel)`
    width: fit-content;
    min-width: 60px;
    height: fit-content;
    border: 1px solid ${({ theme }) => theme.colors.border_highlight};
    border-radius: 8px;
    `