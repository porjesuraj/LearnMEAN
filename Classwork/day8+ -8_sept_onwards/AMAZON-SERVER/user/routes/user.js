const express = require('express')
const utils = require('../../utils')
const db = require('../../db')
const config = require('../../config')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')
const mailer = require('./../../mailer')
const uuid = require('uuid')
const path = require('path')
const fs = require('fs')
const { request } = require('http')
const { response } = require('express')
const router = express.Router()


// ----------------------------------------------------
// GET
// ----------------------------------------------------

//swagger 
/**
 * @swagger
 *
 * /user/profile:
 *   get:
 *     description: select all from user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: firstName
 *         description: firstName to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: lastName
 *         description: lastName to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: email
 *         description: email use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: address
 *         description: User's address.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: user info 
 */




router.get('/profile', (request, response) => {
    //console.log(config.secret)
    
    const statement = `select firstName, lastName, email, password,address,city,
    country,zip,phone from user where id = ${request.userId}`;
    db.query(statement, (error, users) => {
      if (error) {
        response.send({status: 'error', error: error})
      } else {
        if (users.length == 0) {
          response.send({status: 'error', error: 'user does not exist'})
        } else {
          const user = users[0]
          response.send(utils.createResult(error, user))
        }
      }
    })
    
  })



  router.get('/activate/:token',(request,response) => {
    const{token} = request.params
         const activatestatement = `update user set active = 1, 
         activationToken = '' 
         where activationToken = '${token}'`;
        
       
        
        
         db.query(activatestatement,(error,data) => {
          const htmlPath = path.join(__dirname,'/../templates/activated_account.html')
          let body = '' + fs.readFileSync(htmlPath)
          body = body.replace('firstName','user')
            response.header('Content-Type','text/html')
            response.send(body)

         })


  })

  router.get('/forgot-password/:email',(request,response) => {
     const {email} = request.params

    const statement = `select id from user where email = '${email}'`;

    db.query(statement,(error,users) => {
          
      if (error)
      {
        response.send(utils.createError(error))

      }
      else if (users.length == 0)
      {
        response.send('user does not exist')
      }
      else
      {
        const otp = utils.createOTP()
        const body = `otp = ${otp}`

        mailer.sendEmail(email,'reset password',body,(error,data) => {

          response.send(utils.createResult(error, { otp : otp,email: email}))
        })

      }

    })

     

  })

  //forgot password
// ----------------------------------------------------

// ----------------------------------------------------
// POST
// ----------------------------------------------------

//swagger 
/**
 * @swagger
 *
 * /user/signup:
 *   post:
 *     description: select all from user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: firstName
 *         description: firstName to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: lastName
 *         description: lastName to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: email
 *         description: email use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: address
 *         description: User's address.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: user info 
 */



router.post('/signup', (request, response) => {
  const { firstName, lastName, email, password } = request.body
 const activationToken = uuid.v4()
const activationLink = `http://localhost:3000/user/activate/${activationToken}`;
 const htmlPath = path.join(__dirname,'/../templates/signup_active_link.html')
 let body = '' + fs.readFileSync(htmlPath)
body = body.replace('firstName',firstName)
body = body.replace('activationLink',activationLink) 
  
  const statement = `insert into user (firstName, lastName, email, password,activationToken)
   values ('${firstName}', '${lastName}', '${email}', '${crypto.SHA256(password)}','${activationToken}')`
  db.query(statement, (error, data) => {

    mailer.sendEmail(email,'Welcome to mystore',body,(error,info) => {
        console.log(error)
        console.log(info)
        response.send(utils.createResult(error,data))
    }  )

  })
})


//swagger 
/**
 * @swagger
 *
 * /user/signin:
 *   post:
 *     description: select all from user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: email use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: user info 
 */




router.post('/signin', (request, response) => {
    const {email, password} = request.body
    const statement = `select id, firstName, lastName from user where email = '${email}'
     and password = '${crypto.SHA256(password)}'`
    db.query(statement, (error, users) => {
      if (error) {
        response.send({status: 'error', error: error})
      } else {
        if (users.length == 0) {
          response.send({status: 'error', error: 'user does not exist'})
        } else {
          const user = users[0]
          const token = jwt.sign({id: user['id']}, config.secret)
          response.send(utils.createResult(error, {
            firstName: user['firstName'],
            lastName: user['lastName'],
            token: token
          }))
        }
      }
    })
  })



// ----------------------------------------------------


// ----------------------------------------------------
// PUT
// ----------------------------------------------------

//swagger 
/**
 * @swagger
 *
 * /user/edit/:id:
 *   put:
 *     description: select all from user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: firstName
 *         description: firstName to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: lastName
 *         description: lastName to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: email
 *         description: email use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: address
 *         description: User's address.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: user info 
 */



router.put('/edit/:userId', (request, response) => {
    const {userId} = request.params 
    const { firstName, lastName, email, password,address,city,country,zip,phone } = request.body
  
    
    const statement = `update user
     set firstName = '${firstName}',
     lastName = '${lastName}',
      email = '${email}',
     password = '${crypto.SHA256(password)}',
     address = '${address}',
     city = '${city}',
     country = '${country}',
     zip = '${zip}',
     phone = '${phone}'
     where id = ${userId}`
     db.query(statement, (error, data) => {

        mailer.sendEmail(email,'hello user','<h1>account updated</h1>',(error,info) => {
            console.log(error)
            console.log(info)
            response.send(utils.createResult(error,data))
        }  )
    
      })
  })










// ----------------------------------------------------



// ----------------------------------------------------
// DELETE
// ----------------------------------------------------

//swagger 
/**
 * @swagger
 *
 * /user/:id:
 *   delete:
 *     description: select all from user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: firstName
 *         description: firstName to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: lastName
 *         description: lastName to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: email
 *         description: email use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: address
 *         description: User's address.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: user info 
 */



router.delete('/:userId', (request, response) => {
    const {userId} = request.params 
   
    
    const statement = `delete from user where id = ${userId}`
    db.query(statement, (error, data) => {

        response.send(utils.createResult(error,data))
        //mailer.sendEmail(email,'account deleted  on mystore','<h1>bye bye</h1>',(error,info) => {
        //    console.log(error)
        //    console.log(info)
        //    response.send(utils.createResult(error,data))
        //}  )
    //
      })
  })




// ----------------------------------------------------

module.exports = router
