const {Produk, Keranjang, KeranjangProduk, User} = require('../models')

class Controller{
    static userHome(req,res){
        User.findAll()
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.send(err)
        })
        // res.render('home')
    }
}

module.exports = Controller