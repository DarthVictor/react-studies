import * as React from 'react'

export class HelloWorld extends React.Component<{}, {}> {
    render() {
        return <h1>Hello World</h1>
    }
}
export const HelloWorldStateless = () =>  <h1>Hello World Stateless</h1>