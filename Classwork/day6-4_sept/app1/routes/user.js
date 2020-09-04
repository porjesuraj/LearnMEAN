const express = require('express')
const { request, response } = require('express')

const router = express.Router()

router.get('/',(request,response) => {

    console.log('get / user')

    response.send('get/ user')
})

router.post('/',(request,response) => {

    console.log('post/ user')

    response.send('post/ user')
})

router.put('/',(request,response) => {

    console.log('put/ user')

    response.send('put/ user')
})

router.delete('/',(request,response) => {

    console.log('delete / user')

    response.send('delete/ user')
})

module.exports = router