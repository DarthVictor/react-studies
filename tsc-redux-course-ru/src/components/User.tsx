import * as React from 'react'
interface UserProps {
    name: string
}

export default class User extends React.Component<UserProps, {}> {
    render() {
        return <div>
             <p>Hello, {this.props.name}!</p>
        </div>
    }
}