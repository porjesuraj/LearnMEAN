const express = require('express')
const db = require('../db')
const jwt = require('jsonwebtoken')
const utils = require('../utils')
const { request, response } = require('express')
const router = express.Router()

try{
    const token = request.headers['token']
    const data = jwt.verify(token,'123456789')

}
catch (ex)
{
    response.status(401)
    response.send('you are not allowed to access this API')
}

router.get('/',(request,response) => {

  //  const {id} = request.params
  try{


    const token = request.headers['token']
    const data = jwt.verify(token,'123456789')
    const statement = `select contents from note where userId = ${data.id} `
    
     db.query(statement,(error,data) => {

        response.send(utils.createResult(error,data))
     })

}
catch (ex)
{
    response.status(401)
    response.send('you are not allowed to access this API')
}



})

router.post('/',(request,response) => {

    try{
        const token = request.headers['token']
        const data = jwt.verify(token,'123456789')
    //const {id} = request.params
    const{contents} = request.body
    const statement = `insert into note  (contents,userId) values('${contents}','${data.id}') `
    
     db.query(statement,(error,data) => {

        response.send(utils.createResult(error,data))
     })
    }
    catch (ex)
    {
        response.status(401)
        response.send('you are not allowed to access this API')
    }

    
})

router.put('/:id',(request,response) => {

    const {id} = request.params
    const{contents} = request.body
    const statement = `update note  set contents = '${contents}' where id = ${id} `
    
     db.query(statement,(error,data) => {

        response.send(utils.createResult(error,data))
     })
})

router.delete('/:id',(request,response) => {

    const {id} = request.params
   
    const statement = `delete from note  where id = ${id} `
    
     db.query(statement,(error,data) => {

        response.send(utils.createResult(error,data))
     })
})


module.exports = router



