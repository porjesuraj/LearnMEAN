const express = require('express')
const { request, response } = require('express')

const router = express.Router()

router.get('/',(request,response) => {

    console.log(' get / category')
    response.send('get/category')
})

router.post('/',(request,response) => {

    console.log('post/ category')

    response.send('post/ category')
})

router.put('/',(request,response) => {

    console.log('put/ category')

    response.send('put/ category')
})

router.delete('/',(request,response) => {

    console.log('delete / category')

    response.send('delete/ category')
})

module.exports = router