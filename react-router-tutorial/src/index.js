import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import {Router, Route, hashHistory} from 'react-router'
import Repos from './modules/Repos'
import About from './modules/About'
render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/repos" component={Repos}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>
), document.getElementById('app'))
