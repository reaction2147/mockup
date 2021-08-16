import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home"
import * as Routes from './constants/routes'

export function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path={Routes.HOME}>
                <Home />
            </Route>
            <Route exact path={Routes.PAGE2}>
            <p>I will be another page</p>
            </Route>
        </Switch>
    </BrowserRouter>
  );
}
