import express  from 'express'
import React    from 'react'
import ReactDom from 'react-dom/server'
import { match, RouterContext} from 'react-router'
import routes      from './routes' 

import {Provider} from 'react-redux'
import configureStore from './redux/configureStore' 

import { getHeaders, initialize } from 'redux-oauth'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cookieParser());

app.use((req, res) => {
  const store = configureStore();
  store.dispatch(initialize({
    backend: {
      apiUrl: 'https://redux-oauth-backend.herokuapp.com',
      authProviderPaths: {
        github: '/auth/github'
      },
      signOutPath:  null
    },
    currentLocation: req.url,
    cookies: req.cookies    
  }))
  .then(() => store.dispatch(timeRequest()))
  .then(() => match({routes: routes(store), location: req.url}, (error, redirectLocation, renderProps) => {
    if(redirectLocation){
      return res.redirect(301, redirectLocation.pathname + redirectLocation.search);
    }

    if (error) { // Произошла ошибка любого рода
      return res.status(500).send(error.message);
    }    
    
    if (!renderProps) { // Произошла ошибка любого рода
      return res.status(404).send('Not found');
    }

    const componentHTML = ReactDom.renderToString(
        <Provider store={store}>
            <RouterContext {...renderProps} />
        </Provider>
    );

    const state = store.getState();
    
    res.cookie('authHeaders', JSON.stringify(getHeaders(state)), { maxAge: Date.now() + 14 * 24 * 3600 * 1000 })
    
    res.end(renderHTML(componentHTML, state))
  }))
  
})


const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050' : '/';

function renderHTML(componentHTML, initialState) {
  return `
    <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Hello React</title>
          <link rel="stylesheet" href="${assetUrl}/public/assets/styles.css">
          <script type="application/javascript">
            window.REDUX_INITIAL_STATE = ${JSON.stringify(initialState)};
          </script>
      </head>
      <body>
        <div id="react-view">${componentHTML}</div>
        <script type="application/javascript" src="${assetUrl}/public/assets/bundle.js"></script>
      </body>
    </html>
  `;
}

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`)
})