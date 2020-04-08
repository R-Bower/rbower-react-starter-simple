import {createGlobalStyle, css} from "styled-components"
import {colors} from "./theme"

export const defaultFont = css`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  color: ${colors.text};
`

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0 !important;
    margin: 0 !important;
    ${defaultFont};
  }
  input {
  padding: 0;
    ${defaultFont};
  }
  button, div, span, td, p, h1, h2, h3, h4, h5, h6 {
    ${defaultFont};
    margin: 0;
  }
  h6 {
    font-size: 18px;   
  }
  p {
    font-size: 14px;
  }
`

export default GlobalStyle
