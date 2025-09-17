import styled from "styled-components";
import { BasePanel } from "./BasePanel";

export const SaveSenseProf = styled(BasePanel)`
    border: 1px solid ${({ theme }) => theme.colors.border_highlight};
    width: 30%;
    min-width: 200px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    `