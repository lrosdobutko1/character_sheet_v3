import styled from "styled-components";

export const BasePanel = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.small};
  margin: ${({ theme }) => theme.spacing.small} auto;
  width: fit-content;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
`;