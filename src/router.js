import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "./routes/Home";

const IndexRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </Router>
);

export default IndexRouter;
