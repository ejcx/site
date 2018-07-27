const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const {promisify} = require('util');
const api = require('./web/api.js');
const session = require("express-session")

app.use(session({ 
  secret: '0e424281d0b3dddd3e0fb8074c2a9a8b',
  cookie: { maxAge: 86400000 * 7},
  saveUninitialized: false,
  resave: false
}))

var urlencodedParser = bodyParser.urlencoded({ extended: false })
function serve(res, fname) {
  res.sendFile(fname, {root:'static'});
}

app.get('/', urlencodedParser, api.index)
app.get('/blog', urlencodedParser, api.blog)
app.get('/contact', urlencodedParser, api.contact)
app.get('/misconfigured-cors/index.html', urlencodedParser, api.misconfiguredcors)
app.get('/misconfigured-cors/', urlencodedParser, api.misconfiguredcors)
app.get('/misconfigured-cors', urlencodedParser, api.misconfiguredcors)
app.get('/keybase-io-vulnerability/index.html', urlencodedParser, api.keybase)
app.get('/keybase-io-vulnerability/', urlencodedParser, api.keybase)
app.get('/keybase-io-vulnerability', urlencodedParser, api.keybase)
app.get('/crash-safari-com/index.html', urlencodedParser, api.crashingsafari)
app.get('/crash-safari-com/', urlencodedParser, api.crashingsafari)
app.get('/crash-safari-com', urlencodedParser, api.crashingsafari)


app.listen(3000, () => console.log('Server started'))
