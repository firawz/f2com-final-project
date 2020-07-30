const {Produk, Keranjang, KeranjangProduk, User} = require('../models')

class Controller{
    static produkHome(req,res){
        Produk.findAll()
        .then(data=>{
            res.data
        })
        .catch(err=>{
            res.send(err)
        })
        // res.render('home')
    }
}

module.exports = Controller