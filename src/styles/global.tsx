import { createGlobalStyle } from "styled-components";

interface GlobalStyleProps {
  $cursor?: string;
}

export const GlobalStyles = createGlobalStyle<GlobalStyleProps>`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    /* cursor: url('path-to-image.png'), auto; */
    cursor: ${({ $cursor }) => `url(${$cursor}), auto`} !important;
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
  }
  `;
