import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import routes from './routes'
import PublicRoute from "./PublicRoute";
import PageNotFound from "../views/PageNotFound";

export default (
    <Switch>
        {routes.map((route, i) => {
            if (route.auth) {
                return <PrivateRoute key={i} {...route} />
            }

            return <PublicRoute key={i} {...route} />
        })}
        <Route component={PageNotFound}/>
    </Switch>
);