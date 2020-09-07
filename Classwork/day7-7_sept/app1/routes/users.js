const express = require('express')
const db = require('../db')
const jwt = require('jsonwebtoken')
const crypto = require('crypto-js')

const utils = require('../utils')
const router = express.Router()


router.get('/profile',(request,response) => {

    const token = request.headers['token']

       try {


        //const {id} = request.body
    //const{id} = request.query

    const data = jwt.verify(token,'123456789')
    const {id} = request.params
     const statement = `select * from user  where id = '${data.id}'`;

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
    

       }
       catch (ex)
       {
           response.status(401)
           response.send('not allowed to access this api')
       }
    
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
     const token = jwt.sign({id : user['id']},'123456789')             
                 response.send({"status" : "success", "data" : {
                    firstName : user['firstName'],
                    lastName : user['lastName'],
                    email : user['email'],
                    token : token
                 } })
                 
             }
         }
     })
    
    })

 router.put('/:userId',(request,response) => {
     const{userId} = request.params 
    const {firstName,lastName,email,password,mobile} = request.body
    const encryptedPassword = crypto.SHA256(password)
     const statement = `update user set firstName = '${firstName}',lastName = '${lastName}',password = '${encryptedPassword}',
     mobile = '${mobile}',email = '${email}' where id = ${userId}`;

    
     db.query(statement,(error,dbdata) => {
         response.send(utils.createResult(error,dbdata))
     })
        
        })  

 router.delete('/:userId',(request,response) => {
     
    const{userId} = request.params 
    
   
     const statement = `delete from user  where id = ${userId}`;

    
     db.query(statement,(error,dbdata) => {
         response.send(utils.createResult(error,dbdata))
     })

     
     })  


     module.exports = router