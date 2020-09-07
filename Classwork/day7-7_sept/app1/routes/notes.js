const express = require('express')
const db = require('../db')
const jwt = require('jsonwebtoken')
const utils = require('../utils')
const { request, response } = require('express')
const router = express.Router()

router.get('/:id',(request,response) => {

    const {id} = request.params

    const statement = `select contents from note where userId = ${id} `
    
     db.query(statement,(error,data) => {

        response.send(utils.createResult(error,data))
     })
})






module.exports = router



