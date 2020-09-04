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



module.exports = router