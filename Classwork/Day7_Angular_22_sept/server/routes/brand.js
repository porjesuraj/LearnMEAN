const express = require('express')
const utils = require('../utils')
const db = require('../db')



const router = express.Router()

//GET all get here-----------------------------------------

//_________________________-swagger

/**
 * @swagger
 *
 * /brand/all:
 *   get:
 *     description: brand management
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: title
 *         description: brand title
 *         in: formData
 *         required: true
 *         type: string
 *       - name: description
 *         description: brand description
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: brand info message
 */


//_______________________________-







    router.get('/',(request,response) => {
        const statement = `select * from brand`;
        db.query(statement,(error,data) => {
            response.send(utils.createResult(error,data))
        })
       
    })
    //--------------------------------------------------------
//POST----------------------------------------------------------

//_________________________-swagger

/**
 * @swagger
 *
 * /brand/:
 *   post:
 *     description: brand management
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: title
 *         description: brand title
 *         in: formData
 *         required: true
 *         type: string
 *       - name: description
 *         description: brand description
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: brand info message
 */


//_______________________________-





router.post('/',(request,response) => {

    const {title ,description } = request.body

    const statement = `insert into brand (title ,description)
    values('${title}','${description}')`
    db.query(statement,(error,data) => {
        response.send(utils.createResult(error,data))
    })
    
})
//----------------------------------------------------------------------------
//PUT---------------------------------------------------------------------------

//_________________________-swagger

/**
 * @swagger
 *
 * /brand/:id:
 *   put:
 *     description: brand management
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: title
 *         description: brand title
 *         in: formData
 *         required: true
 *         type: string
 *       - name: description
 *         description: brand description
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: brand info message
 */


//_______________________________-




router.put('/:id', (request, response) => {
    const {id} = request.params
    const {title, description} = request.body
    const statement = `update brand set title = '${title}', description = '${description}' where id = ${id}`
    db.query(statement, (error, data) => {
      response.send(utils.createResult(error, data))
    })
  })
//------------------------------------------------------------------------
//DELETE--------------------------------------------------------
//_________________________-swagger

/**
 * @swagger
 *
 * /brand/:id:
 *  delete:
 *     description: brand management
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: title
 *         description: brand title
 *         in: formData
 *         required: true
 *         type: string
 *       - name: description
 *         description: brand description
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: brand info message
 */


//_______________________________-




router.delete('/:id',(request,response) => {
    const{id} = request.params
   

    const statement = `delete from brand where id = '${id}' `
    db.query(statement,(error,data) => {
        response.send(utils.createResult(error,data))
    })
})
//----------------------------------------------------------------------------
module.exports = router