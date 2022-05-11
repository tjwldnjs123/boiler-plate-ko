const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://zioni:abcd1234@boilerplate.uhvvz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=>console.log('MONGODB CONNECTED...'))
.catch(err=>console.log(err))


app.get('/',(req,res)=>res.send('Hello World~~안녕하세요'))

app.listen(port,()=>console.log(`Example app listening on port ${port}!`))