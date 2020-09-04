const express = require('express')
const { request, response } = require('express')

const router = express.Router()

const db = require('../db2')

const utility = require('../response')


router.get('/',(request,response) => {
    
    const statement = `select * from note`

    db.query(statement,(error,notes) => {

        const result = { 'status' : ''}
         if(error)
         {
             result['status'] = 'error'
             result['error'] = error
         }
         else
         {
              result['status'] = 'success'
               console.table(notes)     

         }

         response.send(result)
    })


})


router.post('/',(request,response) => {
  
    console.log(request.body)
    const userid = request.body.userid
    const contents = request.body.contents
   

  const statement = `insert into note (userId,contents) 
  values ('${userid}','${contents}') `;

    db.query(statement,(error,dbResult) => {

       response.send(utility.createResult(error,dbResult))
    })


})

router.put('/',(request,response) => {
  
    console.log(request.body)
    const userid = request.body.userid
    const contents = request.body.contents
   

  const statement = `update note set contents = '${contents}'
  where userID = ${userid}`;

    db.query(statement,(error,dbResult) => {

       response.send(utility.createResult(error,dbResult))
    })


})





module.exports = router