import styled from "styled-components";
import { BasePanel } from "./BasePanel";

export const Sheet = styled(BasePanel)`
  width: 8in;
  height: 11.5in;
  border: 3px solid ${({ theme }) => theme.colors.highlight};
`;