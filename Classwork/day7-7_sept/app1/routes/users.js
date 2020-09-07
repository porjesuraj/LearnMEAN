const express = require('express')
const db = require('../db')


const crypto = require('crypto-js')

const utils = require('../utils')
const router = express.Router()


router.get('/profile',(request,response) => {
    

  response.send('get profile')
})

router.post('/signup',(request,response) => {
 
    const {firstName,lastName,email,password,mobile} = request.body
    const encryptedPassword = crypto.SHA256(password)
     const statement = `insert into user (firstName,lastName ,password ,mobile ,email)
     values ('${firstName}','${lastName}','${encryptedPassword}','${mobile}','${email}')`;

     db.query(statement,(error,dbdata) => {
         response.send(utils.createResult(error,dbdata))
     })
     
})

router.post('/signin',(request,response) => {
    const {email,password} = request.body
    const encryptedPassword = crypto.SHA256(password)
     const statement = `select *  from user  where email = '${email}' and password = '${encryptedPassword}'`;

     db.query(statement,(error,users) => {
         if(error)
         {
             response.send({"status" : "error","error" : error })
         }
         else 
         {
             if(users.length == 0)
             {
                response.send({"status" : "error","error" : "no user with this credentials" })
             }
             else
             {
                 user = users[0]

                 response.send({"status" : "success", "data" : user})
                 
             }
         }
     })
    
    })

 router.put('/',(request,response) => {
 
        response.send('update user')
        
        })  

 router.delete('/',(request,response) => {
     response.send('delete user')
     
     })  


     module.exports = router