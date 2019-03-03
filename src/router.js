import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "./routes/Home";
import Register from "./routes/Register";
import Key from "./routes/Key";
import SetKey from "./routes/SetKey";
import User from "./routes/User";
import Logs from "./routes/Logs";
import Statistic from './routes/Statistic';

const IndexRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/key" component={Key} />
      <Route path="/setkey" component={SetKey} />
      <Route path="/user" component={User} />
      <Route path="/log" component={Logs} />
      <Route path="/statistic" component={Statistic} />
    </Switch>
  </Router>
);

export default IndexRouter;
