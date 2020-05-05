import React from 'react';
import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout, Login } from './views'
import './assets/scss/main.scss';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          
        </Layout>
        <Switch>
          <Route path="/" exact component={Login} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
