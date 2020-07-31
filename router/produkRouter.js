const router = require('express').Router()
const Controller = require('../Controller/produkController')

router.get('/', Controller.produkHome)
router.get('/add', Controller.addProduk)
router.post ("/add", Controller.addPost)

router.get ("/edit/:id", Controller.editProduk)
router.post ("/edit/:id", Controller.editPostProduk)

router.get ("/delete/:id", Controller.deleteProduk)
// router.get('/:id/beli', Controller.beli)


module.exports = router 