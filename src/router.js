import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Center from './routes/Center';

const IndexRouter = () => (
  <Router>
      <Switch>
        <Route path="/" exact component={Center} />
      </Switch>
  </Router>
);

export default IndexRouter;