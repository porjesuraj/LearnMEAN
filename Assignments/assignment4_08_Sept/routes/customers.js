const express = require('express')
const db = require('../db')
const utility = require('../utils')
const crypto = require('crypto-js')
const { request, response } = require('express')


const router = express.Router()

//__GET___________________________________
router.get('/',(request,response) => {

    const statement = `select * from customers `;
    db.query(statement,(error,data) => {
      
        response.send(utility.createResult(error,data))

    })
})
router.get('/:userId',(request,response) => {
      const {userId} = request.params
    const statement = `select * from customers where id = ${userId} `;
    db.query(statement,(error,data) => {
      
        response.send(utility.createResult(error,data))

    })
})


//==============================================


//__POST___________________________________

router.post('/signup',(request,response) => {
 
    const {name,password,mobile,address,email,birth} = request.body

//password size small cant add crypto
    const statement =`insert into customers(name,password,mobile,address,email,birth)
    values('${name}','${password}','${mobile}','${address}','${email}','${birth}')` 

    db.query(statement,(error,user) => {

        response.send(utility.createResult(error,user))
    })

})




//==============================================


//__PUT___________________________________


//==============================================

//__DELETE___________________________________


//==============================================

module.exports = router