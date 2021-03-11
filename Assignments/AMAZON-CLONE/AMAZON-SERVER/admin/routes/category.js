const express = require('express')
const utils = require('../../utils')
const db = require('../../db')
const config = require('../../config')

const router = express.Router()

//GET all get here-----------------------------------------

/**
 * @swagger
 *
 * /category/:
 *   get:
 *     description: category management
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: title
 *         description: category title
 *         in: formData
 *         required: true
 *         type: string
 *       - name: description
 *         description: category description
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: category info message
 */


//_______________________________-


router.get('/',(request,response) => {
    const statement = `select id,title from category`;
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
 * /category/:
 *   post:
 *     description: category management
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: title
 *         description: category title
 *         in: formData
 *         required: true
 *         type: string
 *       - name: description
 *         description: category description
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: category info message
 */


//_______________________________-



router.post('/',(request,response) => {

    const {title ,description } = request.body

    const statement = `insert into category (title ,description)
    values('${title}','${description}')`
    db.query(statement,(error,data) => {
        response.send(utils.createResult(error,data))
    })
    
})
//----------------------------------------------------------------------------
//PUT---------------------------------------------------------------------------

/**
 * @swagger
 *
 * /category/:id:
 *   put:
 *     description: category management
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: title
 *         description: category title
 *         in: formData
 *         required: true
 *         type: string
 *       - name: description
 *         description: category description
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: category info message
 */


//_______________________________-

router.put('/:id', (request, response) => {
    const {id} = request.params
    const {title, description} = request.body
    const statement = `update category set title = '${title}', description = '${description}' where id = ${id}`
    db.query(statement, (error, data) => {
      response.send(utils.createResult(error, data))
    })
  })
//------------------------------------------------------------------------
//DELETE--------------------------------------------------------
/**
 * @swagger
 *
 * /category/:id:
 *   delete:
 *     description: category management
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: title
 *         description: category title
 *         in: formData
 *         required: true
 *         type: string
 *       - name: description
 *         description: category description
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: category info message
 */


//_______________________________-


router.delete('/:id',(request,response) => {
    const{id} = request.params
   

    const statement = `delete from category where id = '${id}' `
    db.query(statement,(error,data) => {
        response.send(utils.createResult(error,data))
    })
})
//----------------------------------------------------------------------------
module.exports = router