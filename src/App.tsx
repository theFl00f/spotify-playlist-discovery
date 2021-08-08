import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Index } from "./pages/Index";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
