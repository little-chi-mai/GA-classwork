import React from 'react';
import ReactDOM from 'react-dom';

import {HashRouter as Router, Route} from 'react-router-dom';

import Home from './components/Home'
import Search from './components/Search'
import Profile from './components/Profile'

/* HashRouter is much easier to deploy. BrowserRouter requires more work. */

// NB: Not a component: just a variable with some JSX.

const Routes = (
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/search" component={Search} />
    <Route path="/details/:username" component={Profile} />
  </Router>
)

ReactDOM.render(Routes, document.body);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
