const express = require('express')
const { request, response } = require('express')

const db = require('../db')

const router = express.Router()

router.get('/',(request,response) =>
 {
       

    const statement = `select * from Customer`;

    db.query(statement,(error,data) => {
       const result = { "status" : "", "error" : "", "data" : "data"}
       if(data.length == 0)
       {
           result["status"] = "error"
           result["error"] = error
       }
       else
       {
           result["status"] = "success"
           result["data"] = data
       }
       response.send(result)
    })
  
   
})


module.exports = router