const express = require('express')
const utils = require('../../utils')
const db = require('../../db')
const config = require('../../config')

const router = express.Router()

//GET all get here-----------------------------------------

router.get('/',(request,response) => {
    const statement = `select * from category`;
    db.query(statement,(error,data) => {
        response.send(utils.createResult(error,data))
    })
   
})
    //--------------------------------------------------------
//POST----------------------------------------------------------
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
router.delete('/:id',(request,response) => {
    const{id} = request.params
   

    const statement = `delete from category where id = '${id}' `
    db.query(statement,(error,data) => {
        response.send(utils.createResult(error,data))
    })
})
//----------------------------------------------------------------------------
module.exports = router