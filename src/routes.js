import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import People from './pages/people'
import Home from './pages/home'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component = { Home } />
            <Route exact path="/people" component = { People } />
        </Switch>
    </BrowserRouter>
)

export default Routes;