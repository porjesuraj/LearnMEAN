const express = require('express')
const { request, response } = require('express')

const router = express.Router()

router.get('/',(request,response) => {

    console.log('get / user')

    response.send('get/ user')
})



module.exports = router