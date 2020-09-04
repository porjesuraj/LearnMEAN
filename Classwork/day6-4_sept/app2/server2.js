const express = require('express')

const userRouter = require('./routes/user2')
const bodyParser = require('body-parser')
const noteRouter =require('./routes/note2')

const app = express()
app.use(bodyParser.json())

app.use('/user',userRouter)
app.use('/note',noteRouter)



app.listen(3000,'0.0.0.0', () => {

    console.log(`server started on port 3000`)
} )