import express from 'express';
import path from 'path';




var app = express();

// view engine setup

/** app.set('views', path.join(__dirname, '../views'));
 *app.set('view engine', 'pug'); 
 */

app.get('/', function(req, res, next) {
  res.json('Hello World');
});


app.listen(3000, '0.0.0.0', ()=> {
  console.log('Server is running')
})