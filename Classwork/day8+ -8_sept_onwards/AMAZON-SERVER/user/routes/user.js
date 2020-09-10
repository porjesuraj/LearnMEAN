const express = require('express')
const utils = require('../../utils')
const db = require('../../db')
const config = require('../../config')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')
const mailer = require('./../../mailer')
const router = express.Router()


// ----------------------------------------------------
// GET
// ----------------------------------------------------

router.get('/profile', (request, response) => {
    //console.log(config.secret)
    
    
      response.send()
    
  })
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
 *     description: select all from admin
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
 *     responses:
 *       200:
 *         description: user info 
 */



router.post('/signup', (request, response) => {
  const { firstName, lastName, email, password } = request.body

  
  const statement = `insert into user (firstName, lastName, email, password) values (
    '${firstName}', '${lastName}', '${email}', '${crypto.SHA256(password)}'
  )`
  db.query(statement, (error, data) => {

    mailer.sendEmail(email,'Welcome to mystore','<h1>welcome</h1>',(error,info) => {
        console.log(error)
        console.log(info)
        response.send(utils.createResult(error,data))
    }  )

  })
})



// ----------------------------------------------------


// ----------------------------------------------------
// PUT
// ----------------------------------------------------


// ----------------------------------------------------



// ----------------------------------------------------
// DELETE
// ----------------------------------------------------



// ----------------------------------------------------

module.exports = router
