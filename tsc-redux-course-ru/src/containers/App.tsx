import * as React from 'react'
import {connect} from 'react-redux'

import {RootState} from '../types'

interface AppProps {
    user: RootState
}
class App extends React.Component<AppProps, {}> {
    
    render() {
        const { name, surname, age } = this.props.user
        return (
            <div className="app">
                <p>Hello from App, {name} {surname}</p>
                <p>Are you already {age}?</p>  
            </div>
        );
    }
}

function mapStateToProps (state: RootState) {
    return {
        user: state
    }
}

export default connect(mapStateToProps)(App)