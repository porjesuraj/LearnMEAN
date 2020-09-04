const express = require('express')
const { request, response } = require('express')

const router = express.Router()

const db = require('../db2')


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





module.exports = router