import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/layouts/main-layout';

// Pages - Index
import Home from './components/home';

// Pages - Student
import	IndexContainer from './components/containers/index-container';

export default (
    <Router history={browserHistory}>
        <Route component={MainLayout}>

            <Route path="/" component={Home} />

            <Route path="start">
                <IndexRoute component={IndexContainer} />
            </Route>

        </Route>
    </Router>
);
