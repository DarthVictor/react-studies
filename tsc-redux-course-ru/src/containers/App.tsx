import * as React from 'react'
import {connect} from 'react-redux'
import {RootState, UserState, PageState} from '../types'

interface AppProps {
    user: UserState,
    page: PageState
}
class App extends React.Component<AppProps, {}> {
    
    render() {
        return (
            <div className="app">
                <p>Hello from App, {this.props.user.name} </p>
                <p>У тебя {this.props.page.photos.length} фото за {this.props.page.year} год</p>  
            </div>
        );
    }
}

function mapStateToProps (state: RootState): AppProps {
    return {
        user: state.user,
        page: state.page
    }
}

export default connect(mapStateToProps)(App)