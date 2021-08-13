const { post } = require('../project/router')

// build your `/api/tasks` router here
const router = require('express').Router()

router.post('/', (req, res, next) => {
    console.log('post in tasks')
})

router.get('/', (req, res, next) => {
    console.log('get in tasks')
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside the task router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router