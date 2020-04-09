import styled from "styled-components"
import {
  border,
  color,
  compose,
  flexbox,
  layout,
  shadow,
  space,
  variant
} from "styled-system"
import {height} from "styles/system"

const variants = variant({
  variants: {
    contained: {
      bg: "primary",
      boxShadow: 1,
      color: "white"
    },
    outlined: {
      bg: "transparent",
      border: "solid 1px",
      borderColor: "primary"
    }
  }
})

// https://styled-system.com/table
const Button = styled.button`
  ${compose(border, color, flexbox, layout, shadow, space)};
  ${height};
  align-items: center;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 6px 8px 7px;
  transition: box-shadow 100ms ease;
  user-select: none;
  ${variants};
`

export default Button
