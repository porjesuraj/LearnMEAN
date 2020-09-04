const express = require('express')
const { request, response } = require('express')

const db = require('../db')

const utility = require('../response')
const router = express.Router()

router.get('/',(request,response) =>
 {
       
        const ID = request.body.ID
    const statement = `select * from Customer where ID = ${ID}`;

    db.query(statement,(error,dbResult) => {
        response.send(utility.createResult(error,dbResult))
    
    })
  
   
})

router.post('/',(request,response) => {
    
    
    const Name = request.body.Name
    const Password = request.body.Password
    const Mobile = request.body.Mobile
    const Address = request.body.Address
    const Email = request.body.Email


    const statement = `insert into Customer ( Name, Password,Mobile, Address, Email)
    values ('${Name}','${Password}','${Mobile}','${Address}','${Email}')`;

    db.query(statement,(error,dbResult) => {
         response.send(utility.createResult(error,dbResult))

    })
})



module.exports = router