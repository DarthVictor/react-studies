import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './App'
import Repos from './Repos'
import Repo from './Repo'
import About from './About'
import Home from './Home'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/repos" component={Repos}>
            <Route path="/repos/:userName/:repoName" component={Repo}/>
        </Route>
        <Route path="/about" component={About}/>
    </Route>
)