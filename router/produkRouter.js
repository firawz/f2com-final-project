const router = require('express').Router()
const Controller = require('../Controller/produkController')

router.get('/produk', Controller.produkHome)

router.get('/produk/add', Controller.addProduk)
router.post ("/produk/add", Controller.addPost)

router.get ("/produk/edit/:id", Controller.editProduk)
router.post ("/produk/edit/:id", Controller.editPostProduk)

router.get ("/produk/delete/:id", Controller.deleteProduk)

module.exports = router