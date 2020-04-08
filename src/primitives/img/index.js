import styled from "styled-components"
import {border, color, compose, layout, space} from "styled-system"
import {height} from "styles/system"

const Img = styled.img`
  ${compose(border, color, layout, space)};
  ${height};
`

Img.displayName = "Img"

export default Img
