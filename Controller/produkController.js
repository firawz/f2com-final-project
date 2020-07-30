const {Produk, Keranjang, KeranjangProduk, User} = require('../models')

class Controller{
    static produkHome(req,res){
        Produk.findAll()
        .then(data=>{
            // res.send(data)
            res.render ("listProduk")
        })
        .catch(err=>{
            res.send(err)
        })
        // res.render('home')
    }

    static addProduk (req, res) {
        res.render ("addProduk")
    }

    static addPost (req, res) {
        const newProduk = {
            name: req.body.name,
            harga: req.body.harga,
            stok: req.body.stok,
            kategori: req.body.kategori
        }

        Produk.create (newProduk)
        .then (data => {
            res.redirect ("/produk")
        })
        .catch (err => {
            res.send (err)
        })

    }

    static editProduk (req, res) {
        Produk.findByPk (+req.params.id)
        .then (data => {
            res.render ("editProduk", {data})
        })
        .catch (err => {
            res.send (err)
        })
    }

    static editPostProduk (req, res) {
        const updateProduk = {
            name: req.body.name,
            harga: req.body.harga,
            stok: req.body.stok,
            kategori: req.body.kategori
        }

        Produk.update (updateProduk, {
            where : {
                id: +req.params.id
            }
        })
        .then (data => {
            res.redirect ("/produk")
        })
        .catch (err => {
            res.send (err)
        })

    }

    static deleteProduk (req, res) {
        Produk.destroy ({
            where : {
                id: +req.params.id
            }
        })
        .then (data => {
            res.redirect ("/produk")
        })
        .catch (err => {
            res.send (err)
        })
        
    }

}

module.exports = Controller