const express = require('express')
const bodyParser = require('body-parser')

const routeUsers = require('./routes/users')
//const routerNotes = require('./routes/notes')
const app = express()
app.use(bodyParser.json())

app.use('/user',routeUsers)
//app.use('/note',routerNotes)
app.get('/', (request, response) => {
  response.send('welcome to note backend')
})

app.listen(4000, '0.0.0.0', () => {
  console.log('server started on port 3000')
})