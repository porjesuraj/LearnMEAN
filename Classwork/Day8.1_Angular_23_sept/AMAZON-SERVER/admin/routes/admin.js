const express = require('express')
const utils = require('../../utils')
const db = require('../../db')
const config = require('../../config')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')

const router = express.Router()


// ----------------------------------------------------
// GET
// ----------------------------------------------------

/**
 * @swagger
 *
 * /admin/profle:
 *   get:
 *     description: for signing up an administrator
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: firstName
 *         description: first name of admin
 *         in: formData
 *         required: true
 *         type: string
 *       - name: lastName
 *         description: last name of admin
 *         in: formData
 *         required: true
 *         type: string
 *       - name: email
 *         description: email of admin
 *         in: formData
 *         required: true
 *         type: string
 *       - name: phone
 *         description: admin phone.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: successful message
 */




router.get('/profile', (request, response) => {
    //console.log(config.secret)
    
    
      const statement = `select firstName, lastName, email, phone from admin where id = ${request.userId}`;
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
// ----------------------------------------------------



// ----------------------------------------------------
// POST
// ----------------------------------------------------

//swagger 
/**
 * @swagger
 *
 * /admin/signup:
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
 *         description: admin info 
 */



router.post('/signup', (request, response) => {
  const { firstName, lastName, email, password } = request.body


  const statement = `insert into admin (firstName, lastName, email, password) values (
    '${firstName}', '${lastName}', '${email}', '${password}'
  )`
  db.query(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })
})

//swagger

//swagger 
/**
 * @swagger
 *
 * /admin/signin:
 *   post:
 *     description: select all from admin
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
 *         description: admin info 
 */




router.post('/signin', (request, response) => {
  const {email, password} = request.body
  const statement = `select id, firstName, lastName from admin where email = '${email}' and password = '${password}'`
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
 * /admin/edit/:id:
 *   put:
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
 *         description: admin info 
 */










router.put('/edit/:id', (request, response) =>
 { 
   const {id} = request.params
  
  const { firstName, lastName, email, password } = request.body

  const encryptedPassword = crypto.SHA256(password)
  const statement = `update  admin 
  set firstName = '${firstName}',
  lastName = '${lastName}',
  email = '${email}',
  password = '${encryptedPassword}'
   where id = ${id}`
  db.query(statement, (error, data) => {
    response.send(utils.createResult(error, data))
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
 * /admin/:id:
 *   delete:
 *     description: delete all from admin
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: admin info 
 */


router.delete('/:id', (request, response) => {
  const {id} = request.params
  
  const statement = `delete from admin where id = ${id}`
  db.query(statement, (error, data) => {
    response.send(utils.createResult(error, data))
  })

})

// ----------------------------------------------------

module.exports = router
