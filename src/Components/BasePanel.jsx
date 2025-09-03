import styled from "styled-components";

export const BasePanel = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.small};
  margin: ${({ theme }) => theme.spacing.small} auto;
  width: fit-content;
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.text};
`;