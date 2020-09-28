const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const jwt = require('jsonwebtoken')
const config = require('./config')
//routes 
const adminRouter = require('./routes/admin')
const facultyRouter = require('./routes/faculty')
const studentRouter = require('./routes/student')
const { request, response } = require('express')


const app = express()


app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))

function getUserId(request,response,next)
{
    if(request.url == '/faculty/signup'
     || request.url == '/faculty/signin'
     || request.url == '/student/signup'
     || request.url == '/student/signin'
     || request.url == '/admin/signup'
     || request.url == '/admin/signin')
     {
         next()
     } 
     else
     {
         try
         {

            const token = request.headers['token']
            const data = jwt.verify(token,config.secret)


            request.userId = data['id']

            next()
         } catch(ex)
         {
            response.status(401)
            response.send({status: 'error', error: 'protected api'})
         }
        


     }
}

app.use(getUserId)

//routes
app.use('/admin',adminRouter)
app.use('/faculty',facultyRouter)
app.use('/student',studentRouter)



app.get('/',(request,response) => {
    response.send('welcome')
})

app.listen(3000,'0.0.0.0', () => {
    console.log(`server started on port 3000`)
})