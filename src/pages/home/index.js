import React from "react"
import Primitives from "primitives"
import logo from "assets/svg/logo.svg"

function HomePage() {
  return (
    <Primitives.Flex
      alignItems="center"
      flexDirection="column"
      height={1}
      p={6}
      width={1}
    >
      <Primitives.Img height={[40, 80, 160, 320]} mb={4} src={logo} width={1} />
      <h4>
        Resize your browser window to demo the responsive breakpoints (the image
        size should change)
      </h4>
      <Primitives.Flex mt={3}>
        <h4>Button variants</h4>
      </Primitives.Flex>
      <Primitives.Flex justifyContent="space-between" mt={3} width={300}>
        <Primitives.Button variant="outlined" width={100}>
          Outlined
        </Primitives.Button>
        <Primitives.Button variant="contained" width={100}>
          Contained
        </Primitives.Button>
      </Primitives.Flex>
    </Primitives.Flex>
  )
}

export default HomePage
