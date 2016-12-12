import  * as React from 'react'
import  * as ReactDom from 'react-dom/server'
import {App} from './components/App.tsx'

export default function renderPath(path) {
    const componentHTML = ReactDom.renderToString(React.createElement(App));
    return renderHTML(componentHTML);
}

 

function renderHTML(componentHTML) {
  return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="icon" href="data:,">
        </head>
        <body>
            <div id="react-app" class="container">${componentHTML}</div>
            <script type="text/javascript" src="/dist/bundle.client.js" charset="utf-8"></script>
        </body>
    </html>
  `;
}
