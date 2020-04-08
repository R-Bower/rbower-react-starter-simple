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
      <h6>
        Resize your browser window to demo the responsive breakpoints (the image
        size should change)
      </h6>
    </Primitives.Flex>
  )
}

export default HomePage
