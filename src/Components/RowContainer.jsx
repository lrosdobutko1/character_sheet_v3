import styled from "styled-components";

export const RowContainer = styled.div`
border: 2px solid ${({ theme }) => theme.colors.highlight};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
`;
