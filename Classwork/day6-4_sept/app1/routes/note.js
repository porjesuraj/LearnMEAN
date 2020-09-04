const express = require('express')
const { request, response } = require('express')

const router = express.Router()

router.get('/',(request,response) => {

    console.log(' get / note')
    response.send('get/note')
})

router.post('/',(request,response) => {

    console.log('post/ note')

    response.send('post/ note')
})

router.put('/',(request,response) => {

    console.log('put/ note')

    response.send('put/ note')
})

router.delete('/',(request,response) => {

    console.log('delete / note')

    response.send('delete/ note')
})

module.exports = router