const express = require('express')
const db = require('../db')
const utility = require('../utils')
const config = require('../config')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')
const { request, response } = require('express')


const router = express.Router()

//__GET___________________________________


//==============================================


//__POST___________________________________

router.post('/add',(request,response) => {

    const {id,name,author,subject, price} = request.body
   const statement = `insert into books (id,name,author,subject,price)
   values('${id}','${name}','${author}','${subject}','${price}')`

   db.query(statement,(error,book) => {
       response.send(utility.createResult(error,book))
   })

})


//==============================================


//__PUT___________________________________





//==============================================

//__DELETE___________________________________



//==============================================

module.exports = router