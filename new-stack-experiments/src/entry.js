import  * as React from 'react'
import  * as ReactDom from 'react-dom'

import {anotherAsync} from './tsContent.ts'
import {HelloWorldStateless, HelloWorld} from './components/HelloWorld.tsx'

module.hot.accept()
async function run(){    
    return (await anotherAsync()).map((title, id) => (id+1) + '. ' + title)
}
run().then((res) => {
    document.querySelector('.main-list').innerHTML =  res.join('<br>');    
    console.log(res)
    require('./bootstrap.css')
})
ReactDom.render(
    React.createElement('div', [], [React.createElement( HelloWorld), React.createElement(HelloWorldStateless)]),
    document.getElementById('hello-world')
)