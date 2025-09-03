import styled from "styled-components";
import { BasePanel } from "./BasePanel";

export const StatCell = styled(BasePanel)`
    width: fit-content;
    height: fit-content;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;
    `