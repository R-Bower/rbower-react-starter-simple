import React from "react"
import Primitives from "primitives"
import {Route, Switch} from "react-router"
import {Home, Something} from "pages"

function App() {
  return (
    <Primitives.Flex
      height={1}
      justifyContent="center"
      minHeight="100vh"
      width={1}
    >
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Something} path="/something" />
      </Switch>
    </Primitives.Flex>
  )
}

export default App
