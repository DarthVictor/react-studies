import * as React from 'react'
import {connect} from 'react-redux'
import {Action} from '../actions/ActionTypes'
import {PageActions, PageActionsProps} from '../actions/PageActions'
import {Dispatch, bindActionCreators, ActionCreatorsMapObject } from "redux";

import {RootState, UserState, PageState, Year} from '../types'
import User from '../components/User'
import Page from '../components/Page'

interface AppStateProps {
    user: UserState,
    page: PageState
}

interface AppDispatchProps {
    pageActions: PageActionsProps
}
type AppProps = AppStateProps & AppDispatchProps

class App extends React.Component<AppProps, any> {
    
    render() {
        const { user, page } = this.props
        const { setYear } = this.props.pageActions
        return (
            <div className="app">
                <User name={user.name} />
                <Page photos={page.photos} year={page.year} setYear={setYear}/>
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
    pageActions: bindActionCreators(PageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)