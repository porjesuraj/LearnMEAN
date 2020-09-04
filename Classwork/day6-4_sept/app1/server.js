const express = require('express')

const userRouter = require('./routes/user')
const noteRouter = require('./routes/note')
const categoryRouter = require('./routes/category')
const app = express()

app.use('/user',userRouter)
app.use('/note',noteRouter)
app.use('/category',categoryRouter)

app.listen(3000,'0.0.0.0', () => {

    console.log('server started on port no:3000')
})