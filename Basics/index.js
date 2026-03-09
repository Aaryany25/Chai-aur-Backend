require('dotenv').config()
const express = require('express')
// import express from "express"
const app = express()
const port = 3000
app.get("/",(req,res)=>{
    res.send("Hello World Bitch !")
})
app.get("/Aryan",(req,res)=>{
    res.send("<h1>AAgaya bc Tu</h1>")
})
app.listen(process.env.PORT,()=>{
    console.log("express server started !")
})