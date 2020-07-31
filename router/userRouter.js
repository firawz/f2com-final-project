const router = require('express').Router()
const Controller = require('../Controller/userController')

router.get('/', Controller.userHome)
router.get('/add', Controller.addGet)
router.post('/add', Controller.addPost)
router.get('/edit/:id', Controller.editGet)
router.post('/edit/:id', Controller.editPost)
router.get('/delete/:id', Controller.delete)
router.get('/:id/keranjang', Controller.keranjang)
router.get('/:id/beli', Controller.beliGet)
router.post('/:id/beli', Controller.beliPost)
// router.post('/:id/beli', Controller.beli)

// router.post()

module.exports = router