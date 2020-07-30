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
}

module.exports = Controller