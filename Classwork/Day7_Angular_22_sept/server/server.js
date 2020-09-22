const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE")
  next();
});

app.use(bodyParser.json())


const userRouter = require('./routes/user')
const productRouter = require('./routes/product')
const brandRouter = require('./routes/brand')
const categoryRouter = require('./routes/category')

app.use('/user', userRouter)
app.use('/products', productRouter)
app.use('/brand',brandRouter)
app.use('/category',categoryRouter)

app.listen(3000, '0.0.0.0', () => {
  console.log('server started on port 3000')
})