import styled from "styled-components"
import {
  border,
  color,
  compose,
  flexbox,
  layout,
  shadow,
  space
} from "styled-system"

// https://styled-system.com/table
const Flex = styled.div`
  ${compose(border, color, flexbox, layout, shadow, space)};
  display: flex;
`

export default Flex
