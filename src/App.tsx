import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Index } from "./pages/Index";
import Home from "./pages/Home";
import { Wrapper } from "./pages/shared";

function App() {
  return (
    <Router>
      <Wrapper>
        <nav>
          <ul>
            <li>
              <Link to="/">Unauthenticated</Link>
            </li>
            <li>
              <Link to="/home">Authenticated</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
