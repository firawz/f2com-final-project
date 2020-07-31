const {Produk, Keranjang, KeranjangProduk, User} = require('../models')

class Controller{
    static userHome(req,res){
        User.findAll()
        .then(data=>{
            res.render('userView/home',{data})
        })
        .catch(err=>{
            res.send(err)
        })
    }
    static addGet(req,res){
        res.render('userView/addForm')
    }

    static addPost(req,res){
        const data = {
            username: req.body.username,
            password: req.body.password
        }
        User.create(data)
        .then(data=>{
            res.redirect('/user')
        })
        .catch(err=>{
            const error = err.errors
            const errors = []
            error.forEach(element => {
                errors.push(element.message)
            });
            res.send(errors)
        })
    }
    static editGet(req,res){
        const userId = req.params.id
        User.findByPk(userId)
        .then(data=>{
            res.render('userView/edit', {data})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static editPost(req,res){
        const editedData = {
            username: req.body.username,
            password: req.body.password
        }
        // res.send(req.params.id)
        User.update(editedData,{where: {id:+req.params.id}})
        .then(data=>{
            res.redirect('/user')
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static delete(req,res){
        const userId = req.params.id
        User.destroy({
            where : 
            {id:userId}
        })
        .then(()=>{
            res.redirect('/user')
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static keranjang(req,res){
        let product
        let keranjang
        User.findByPk(req.params.id, {include:Produk})
        .then(data=>{
            // res.send(data)
            res.render('keranjangView/listKeranjang', {data})
        }).catch(err=>{
            res.send(err)
        })
        
    }
    
    static beliGet(req,res){
        Produk.findAll()
        .then(data=>{
            res.render('userView/formBeli', {data})
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static beliPost(req,res){
        // res.send(req.body)
        Keranjang.create({UserId:req.params.id,
        ProdukId:req.body.idProduk})
        .then(data=>{
            return Keranjang.findAll({where: {UserId: req.params.id}})
        }).then(data=>{
            return User.findByPk(req.params.id, {include:[Produk]})
            // return Produk.create({where: {User: {id : req.params.id}}})
        }).then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.send(err)
        })
    }
}

module.exports = Controller