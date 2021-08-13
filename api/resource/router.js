// build your `/api/resources` router here
const router = require('express').Router()

router.post('/', (req, res, next) => {
    console.log('post in resources')
})

router.get('/', (req, res, next) => {
    console.log('get in resources')
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside the resource router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router