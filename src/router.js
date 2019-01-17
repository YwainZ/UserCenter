import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "./routes/Home";
import Register from './routes/Register';
import Key from './routes/Key';

const IndexRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/key" component={Key} />
    </Switch>
  </Router>
);

export default IndexRouter;
