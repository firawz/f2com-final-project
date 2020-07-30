const router = require('express').Router()
const userRouter = require('./userRouter')
const produkRouter = require('./produkRouter')
const Controller = require('../Controller/index')

router.get('/', Controller.home)
router.use('/user', userRouter)
router.use('/produk', produkRouter)
module.exports = router