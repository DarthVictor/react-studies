import  * as React from 'react'
import  * as ReactDom from 'react-dom'

import {App} from './components/App.tsx'
module.hot.accept()

ReactDom.render(
    React.createElement(App),
    document.getElementById('react-app')
)