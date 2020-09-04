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




module.exports = router