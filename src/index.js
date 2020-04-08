import React, {Fragment} from "react"
import ReactDOM from "react-dom"
import theme from "styles/theme"
import {ThemeProvider} from "styled-components"
import {BrowserRouter} from "react-router-dom"
import {Router} from "react-router"
import {createBrowserHistory} from "history"
import GlobalStyle from "styles/globalStyle"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Fragment>
        <Router history={createBrowserHistory()}>
          <App />
        </Router>
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
