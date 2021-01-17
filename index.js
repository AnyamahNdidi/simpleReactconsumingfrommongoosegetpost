const express = require('express')
const concors = require('cors')
const port = 7800

const mongoose = require('mongoose')
const myRouter = require('./Router/Router')
const url = 'mongodb://localhost/tuesdaylabdb'


const server =  express()
mongoose.connect(url, {useNewUrlParser:true})

const con =mongoose.connection

con.on("open", ()=>{
    console.log("mongoose is ready to use")
})

server.use(concors())
server.use(express.json())
server.use('/', myRouter)

server.listen(port, ()=>{
    console.log(`this is my ${port}`)
})