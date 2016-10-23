import express  from 'express'
import session  from 'express-session'
import Grant  from 'grant-express'
import React    from 'react'
import ReactDom from 'react-dom/server'
import { match, RouterContext} from 'react-router'
import routes      from './routes' 

import {Provider} from 'react-redux'
import configureStore from './redux/configureStore' 
import {timeRequest} from './redux/actions/timeActions' 

import { getHeaders, initialize } from 'redux-oauth'
import cookieParser from 'cookie-parser'
 
const grant = new Grant(require('./config.json'))
 


const app = express()

app.use(session({secret:'very secret'}))
app.use(grant)
app.use(cookieParser());
//https://redux-oauth-backend.herokuapp.com/omniauth/facebook?auth_origin_url=http%3A%2F%2Fdarthvictor.ru%3A3000%2F&resource_class=User
 app.get('/auth/validate_token', function (req, res) {
     let token = {'success':true,'data':{'id':123,'provider':'github','uid':'2578541','name':'Victor Follet','nickname':'DarthVictor',
       'image':'https://avatars.githubusercontent.com/u/2578541?v=3','email':'follet.victor@gmail.com'}}
     console.log('/auth/validate_token', req.query)
     res.end(JSON.stringify(req.query))
 })

app.use((req, res) => {
  const store = configureStore();
  store.dispatch(initialize({
    backend: {
      apiUrl: 'http://darthvictor.ru:3000',// 'https://redux-oauth-backend.herokuapp.com', 'http://darthvictor.ru:3000'
      authProviderPaths: {
         facebook: '/auth/facebook',
         github: '/connect/github', //connect/github/callback
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
    console.log()
    let html = renderHTML(componentHTML, state)
    res.end(html)
  }))
  .catch((e) => console.error(e))
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

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`)
})