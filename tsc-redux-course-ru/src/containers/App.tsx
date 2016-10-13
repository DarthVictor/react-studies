import * as React from 'react'
import {connect} from 'react-redux'
import {RootState, UserState, PageState} from '../types'
import User from '../components/User'
import Page from '../components/Page'

interface AppProps {
    user: UserState,
    page: PageState
}
class App extends React.Component<AppProps, {}> {
    
    render() {
        return (
            <div className="app">
                <User name={this.props.user.name} />
                <Page photos={this.props.page.photos} year={this.props.page.year} />
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