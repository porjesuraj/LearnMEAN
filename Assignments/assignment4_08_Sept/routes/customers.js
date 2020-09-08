const express = require('express')
const db = require('../db')
const utility = require('../utils')
const config = require('../config')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')
const { request, response } = require('express')


const router = express.Router()

//__GET___________________________________
router.get('/all',(request,response) => {

    const statement = `select * from customers `;
    db.query(statement,(error,data) => {
      
        response.send(utility.createResult(error,data))

    })
})
router.get('/profile',(request,response) => {
      const {userId} = request.params
    const statement = `select * from customers where id = ${request.userId} `;
    db.query(statement,(error,users) => {

        if(error)
        {
            response.send({status : 'error','error' : error })
        }
        else 
        {
            if(users.length == 0)
            {
                response.send({status : 'error','error' : 'user not in database'})
            }
            else
            {
                user = users[0]
               
                response.send(utility.createResult(error,user))
            }
        }
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

router.post('/signin',(request,response) => {
 
    const {password,email} = request.body

//password size small cant add crypto
    const statement =`select * from customers where email = '${email}' and password = '${password}'`;


    db.query(statement,(error,users) => {

        if(error)
        {
            response.send({status : 'error','error' : error })
        }
        else 
        {
            if(users.length == 0)
            {
                response.send({status : 'error','error' : 'user not in database'})
            }
            else
            {
                user = users[0]
               const token = jwt.sign({id : user['id']},config.secret)
                response.send(utility.createResult(error,
                    {
                        'name' : user['name'],
                        'email' : user['email'],
                        token : token
                    }
                    ))
            }
        }
    })

})


//==============================================


//__PUT___________________________________
router.put('/edit',(request,response) => {
 
    const {name,password,mobile,address,email,birth} = request.body

//password size small cant add crypto
    const statement =`update customers
     set name = '${name}',
     password = '${password}',
     mobile = '${mobile}',
     address = '${address}',
     email = '${email}',
     birth = '${birth}'
      where id = ${request.userId}` 

    db.query(statement,(error,user) => {

        response.send(utility.createResult(error,user))
    })

})





//==============================================

//__DELETE___________________________________

router.delete('/delete',(request,response) => {
 
    const {name,password,mobile,address,email,birth} = request.body

//password size small cant add crypto
    const statement =`delete from customers
      where id = '${request.userId}'` 

    db.query(statement,(error,user) => {

        response.send(utility.createResult(error,user))
    })

})


//==============================================

module.exports = router