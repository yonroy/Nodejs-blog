const express = require('express')
const app = express()
const handlebars  = require('express-handlebars');
const morgan = require('morgan')
const path = require('path')
const port = 3000
// http logger
app.use(morgan('combined'))
// template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resoures/views'));


app.get('/', (req, res) => {
  res.render('home');
})

app.get('/new', (req, res) => {
  res.render('new');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})