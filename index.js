const express = require('express')
global.app = express()

require('dotenv').config()

global.fs = require('fs')
global.path = require('path')
global.crypto = require('crypto')

const cs = crypto.randomBytes(32).toString('hex');

app.use(require('body-parser').json())
app.use(require('cookie-parser')(cs))
app.use(require('express-session')({
    secret: cs,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' }
}))

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})

require('./backend/backend')
require('./frontend/frontend')