
require('dotenv').config()
const express  = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/twitter',(req,res)=>{
    res.send('twitter.com')
})

app.get('/login',(req,res)=>{
    res.send('please login at chai aur code')
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>Learn and grow up</h2>")
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})