import styled from "styled-components"
import {border, color, compose, layout, space} from "styled-system"

const Img = styled.img`
  ${compose(border, color, layout, space)};
`

Img.displayName = "Img"

export default Img
