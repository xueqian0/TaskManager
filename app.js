const express = require('express')
const bodyparser = require('body-parser'),
//const Task = require('./db.js')
const app = express()
app.use(express.static('www'))
app.use(bodyparser.json())











app.listen(3000,()=>console.log('监听3000端口成功！'))