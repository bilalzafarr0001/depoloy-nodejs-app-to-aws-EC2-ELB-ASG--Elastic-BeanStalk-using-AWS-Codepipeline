const express = require ('express')
const app = express()
const os = require('os')
const hostname = os.hostname()

const port = process.env.PORT || 3001

console.log(hostname)

app.use(express.json())

app.set('view engine', 'ejs')

// const CurdController = require('./controllers/curdcontroller')
// app.use('/', CurdController)
//// "start": "./node_modules/.bin/env-cmd -f ./.env.prod pm2 start -f app.js",
app.get('/', function(req, res) {
    res.render('pages/index', {hostname : hostname, title : 'home'})
})

app.get('/about', function(req, res) {
    res.render('pages/about', {title: 'about'})
})

// console.log(process.env)
// console.log(process.env.DEPLOYMENT_ENV)

app.listen(port, function() {
    console.log('server is up on port ' + port)
})