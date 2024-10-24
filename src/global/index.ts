import { createGlobalStyle } from "styled-components";

import theme from "./theme";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  };

  html, body {
    width: 100%;
    height: 100vh;

    background-color: ${theme.colors.background};
  };

   p {
    font-family: var(--font-montserrat-alternates), sans-serif;
   }
`;