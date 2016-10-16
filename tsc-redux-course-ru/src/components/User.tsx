import * as React from 'react'
import {UserActions, UserActionsProps} from '../actions/UserActions'
import {UserState} from '../types'

type UserProps = UserState & UserActionsProps

export default class User extends React.Component<UserProps, {}> {
    componentWillMount(){
        this.props.handleCheckStatus();
    }
    render() {
        const { name, error } = this.props
        const template = (!!name)
                        ? <p>Привет, {name}!</p>
                        : <button className='btn' onClick={this.props.handleLogin}>Войти</button>
        return <div className='ib user'>
            {template}
            {error ? <p className='error'> {error}. <br /> Попробуйте еще раз.</p> : ''}
        </div>
    }
}