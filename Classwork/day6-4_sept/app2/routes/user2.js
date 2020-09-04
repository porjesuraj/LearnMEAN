const express = require('express')
const { request, response } = require('express')

const router = express.Router()

const db = require('../db2')

const utility = require('../response')


router.get('/',(request,response) => {
    
    const statement = `select * from user`

    db.query(statement,(error,users) => {

        const result = { 'status' : ''}
         if(error)
         {
             result['status'] = 'error'
             result['error'] = error
         }
         else
         {
              result['status'] = 'success'
               console.table(users)     

         }

         response.send(result)
    })


})

router.post('/signup',(request,response) => {
  
    console.log(request.body)
    const firstName = request.body.firstName
    const lastName = request.body.lastName
    const email = request.body.email
    const password = request.body.password
    const mobile = request.body.mobile

  const statement = `insert into user (firstName,lastName,email,password,mobile) 
  values ('${firstName}','${lastName}','${email}','${password}','${mobile}') `;

    db.query(statement,(error,dbResult) => {

       response.send(utility.createResult(error,dbResult))
    })


})


router.post('/signin',(request,response) => {
  
    
    const email = request.body.email
    const password = request.body.password
   

  const statement = `select * from user where email = '${email}' and  password ='${password}' `;

    db.query(statement,(error,users) =>
     {
          const result = { "status" : "" , "error" : "", "data" : ""}
         if(users.length == 0)
         {
             result['status'] = 'error'
             result['error'] = error
         }
         else
         {
             const user = users[0]
             result['status'] = 'success'
             result['data'] = {
                 "id" : user.id,
                 "email" : user.email,
                 "password" : user.password
             }
              
         }

       response.send(result)
    })


})

router.put('/',(request,response) => {
  
    console.log(request.body)
    const id = request.body.id
    const firstName = request.body.firstName
    const lastName = request.body.lastName
    const email = request.body.email
    const password = request.body.password
    const mobile = request.body.mobile

  const statement = `update user set firstName = '${firstName}', lastName = '${lastName}',
  email = '${email}',password = '${password}',mobile = '${mobile}' where id = ${id}`;

    db.query(statement,(error,dbResult) => {

       response.send(utility.createResult(error,dbResult))
    })


})

router.delete('/',(request,response) => {
  
    console.log(request.body)
    const id = request.body.id
   

  const statement = `delete from user where id = ${id}`;

    db.query(statement,(error,dbResult) => {

       response.send(utility.createResult(error,dbResult))
    })


})



module.exports = router