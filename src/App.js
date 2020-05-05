import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import "./assets/scss/main.scss";
import theme from "./theme";
import { Layout, SignIn } from "./views";
import Routes from "./routes";

const history = createBrowserHistory();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Layout>
          <SignIn />
        </Layout>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
