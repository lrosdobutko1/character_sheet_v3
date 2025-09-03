import styled from "styled-components";
import { BasePanel } from "./BasePanel";

export const Inventory = styled(BasePanel)`
    width: 35%;
    min-width: 200px;
    height: fit-content;
    border: 2px solid ${({ theme }) => theme.colors.highlight};
    `