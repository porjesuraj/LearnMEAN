const express = require('express')
const db = require('../db')
const utility = require('../utils')


const router = express.Router()

//__GET___________________________________
router.get('/allUsers',(request,response) => {

    const statement = `select * from customers `;
    db.query(statement,(error,data) => {
      
        response.send(utility.createResult(error,data))

    })
})




//==============================================


//__POST___________________________________


//==============================================


//__PUT___________________________________


//==============================================

//__DELETE___________________________________


//==============================================

module.exports = router