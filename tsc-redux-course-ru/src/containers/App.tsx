import * as React from 'react'
import {connect} from 'react-redux'
import {Action} from '../actions/ActionTypes'
import {PageActions, PageActionsProps} from '../actions/PageActions'
import {UserActions, UserActionsProps} from '../actions/UserActions'
import {Dispatch, bindActionCreators, ActionCreatorsMapObject } from "redux";

import {RootState, UserState, PageState, Year} from '../types'
import User from '../components/User'
import Page from '../components/Page'

interface AppStateProps {
    user: UserState,
    page: PageState
}

interface AppDispatchProps {
    pageActions: PageActionsProps,
    userActions: UserActionsProps,
}
type AppProps = AppStateProps & AppDispatchProps

class App extends React.Component<AppProps, any> {
    
    render() {
        const { user, page } = this.props
        const { getPhotos } = this.props.pageActions
        const { handleLogin, handleCheckStatus } = this.props.userActions
        return (
            <div className="app">
                <Page photos={page.photos} year={page.year} getPhotos={getPhotos} fetching={page.fetching}/>
                <User name={user.name} handleLogin={handleLogin} handleCheckStatus={handleCheckStatus} error={user.error} />
            </div>
        );
    }
}

function mapStateToProps (state: RootState): AppStateProps {
    return {
        user: state.user,
        page: state.page
    }
}
function mapDispatchToProps(dispatch: Dispatch<any>): AppDispatchProps {
  return {
    pageActions: bindActionCreators(PageActions, dispatch),
    userActions: bindActionCreators(UserActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)