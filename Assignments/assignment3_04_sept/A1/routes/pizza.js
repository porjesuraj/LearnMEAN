const express = require('express')
const { request, response } = require('express')

const db = require('../db')

const utility = require('../response')
const router = express.Router()

router.get('/',(request,response) =>
 {
       
        const ID = request.body.ID
    const statement = `select * from PIZZA_ITEMS where ID = ${ID}`;

    db.query(statement,(error,dbResult) => {
        response.send(utility.createResult(error,dbResult))
    
    })
  
   
})



module.exports = router