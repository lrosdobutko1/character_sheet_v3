import styled from "styled-components";
import { BasePanel } from "./BasePanel";

export const StatCell = styled(BasePanel)`
    width: fit-content;
    min-width: 60px;
    height: fit-content;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;
    `