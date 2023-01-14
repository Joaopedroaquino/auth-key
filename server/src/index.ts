import express from 'express';
//import path from 'path';
import keycloak, { memoryStore } from './keycloak';
import session from 'express-session'





var app = express();
app.use(keycloak.middleware({
  logout: '/logout',
  admin: '/'

}));

app.use(
  session({
  secret:'1234567890',
  resave: false,
  saveUninitialized: true,
  store: memoryStore,
  cookie: {
    maxAge: 1000 * 60 * 10
  }


}))

// view engine setup

/** app.set('views', path.join(__dirname, '../views'));
 *app.set('view engine', 'pug'); 
 */

app.get('/',keycloak.protect(), function(req, res, next) {
  res.json('Hello World');
});


app.listen(3000, '0.0.0.0', ()=> {
  console.log('Server is running')
})