const breakpoints = ["550px", "850px", "1200px", "1800px"]
const space = [4, 8, 12, 16, 24, 32, 40, 48, 64, 96, 128]
const shadows = [
  "none",
  "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
  "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
  "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px"
]

export const colors = {
  primary: "#3f51b5",
  error: "#d32f2f",
  success: "#4caf50",
  warning: "#ff9800",
  "grey-light": "#eeeeee",
  grey: "#9e9e9e",
  "grey-dark": "#616161",
  text: "#424242",
  white: "#fff",
  black: "#000"
}

export default {
  breakpoints,
  colors,
  shadows,
  space
}
