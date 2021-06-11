const path = require('path')
const express = require('express')
const hbs = require('express-handlebars')

// FILE TO SET UP THE SERVER
const server = express()
module.exports = server

const publicFolder = path.join(__dirname, 'public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

const routes = require('./routes.js')
server.use('/', routes)
