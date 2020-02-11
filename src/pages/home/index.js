import React from "react"
import Primitives from "primitives"
import logo from "assets/svg/logo.svg"
import {Link} from "react-router-dom"

function HomePage() {
  return (
    <Primitives.Flex
      alignItems="center"
      flexDirection="column"
      height={1}
      p={6}
      width={1}
    >
      <Primitives.Img
        height={["40px", "80px", "160px", "320px"]}
        mb={4}
        src={logo}
        width={1}
      />
      <h6>
        Resize your browser window to demo the responsive breakpoints (the image
        size should change)
      </h6>
      <Primitives.Flex my={2}>
        <Link to="/something">
          <p>Haha click me nerd, it'll take you to the /something route</p>
        </Link>
      </Primitives.Flex>
    </Primitives.Flex>
  )
}

export default HomePage
