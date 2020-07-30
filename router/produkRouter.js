const router = require('express').Router()
const Controller = require('../Controller/produkController')

router.get('/', Controller.produkHome)

module.exports = router