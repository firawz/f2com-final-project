const router = require('express').Router()
const Controller = require('../Controller/userController')
router.get('/', Controller.userHome)

module.exports = router