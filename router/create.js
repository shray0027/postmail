const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

require("../DB/connection");

const User = require("../model/userSchema");

router.post('/create' , async (req,res) =>{
    const { to, subject , schedule , message} = req.body;
     try{
         if(!to || !subject || !schedule || !message){
             res.status(400).json({error : "please fill the data"});
         }
 
 
     }catch(err){
         console.log(err);
     }
 })

module.exports = router;