const express = require('express')
const volleyball = require('volleyball')
const router = require('./api')
const app = express()

// logging middleware
// Only use logging middleware when not running tests
const debug = process.env.NODE_ENV === 'test'
app.use(volleyball.custom({ debug }))

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', router) // include our routes!

app.use('/', (req, res, next) => {
  res.json("Hi")
}) // include our routes!


// error handling middleware
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== 'test') console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

module.exports = app
