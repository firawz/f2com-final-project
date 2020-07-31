const {Produk, Keranjang, KeranjangProduk, User} = require('../models')

class Controller{
    static home(req,res){
        res.render('home')
    }

    static login(req,res){
        const data = {
            username: req.body.username,
            password: req.body.password
        }
        // res.send(data)
        User.findAll({where:{
            username: data.username,
            password: data.password
        }})
        .then(data=>{
            res.send('aaaaaaaaa')
        })
        .catch(err=>{
            res.send(err)
        })
    }
}

module.exports = Controller