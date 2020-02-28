import React from "react";
import "./App.scss";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Profile from "./Pages/Profile/ Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#16a085',
    },
    secondary: {
      main: '#f1c40f',
    },
  },
  typography: {
    h1: {
      textTransform: "uppercase"
    },
    h2: {
      textTransform: "uppercase"
    },
    h3: {
      textTransform: "uppercase"
    },
    h4: {
      textTransform: "uppercase"
    },
    h5: {
      textTransform: "uppercase"
    },
    h6: {
      textTransform: "uppercase"
    },
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
