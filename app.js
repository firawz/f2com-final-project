const express = require('express')
const app = express()
const port = 3000
const router = require('./router')
const session = require('express-session')


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

app.use('/', router)
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))