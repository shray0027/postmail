const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");





const userSchema = new mongoose.Schema({
    googleId : {
        type : String,
        required : false
    },
    email : {
        type : String,
        required : false
    },
    password : {
        type : String,
        required : false
     },
     cpassword:{
        type : String,
        required : false
     },

     currentRequest : [
        {
            to : {
                type : String,
                required : false,
            } ,
            day:{
                type : Number,
            },
            date:{
                type : Number,
            },
            month:{
                type : Number,
            },
            times:{
                type :Number
            },
           time:{
                type : Number,
            }
            ,
            subject : {
                type : String,
                required : false,
            } ,
            schedule : {
                type : String,
                required : false ,
            } ,
            message : {
                type : String,
                required : false,
            } 
        }
     ],
     history : [
        {
            to : {
                type : String,
                required : false,
            } ,
           timeStamp:{
                type : String,
            }
            ,
            subject : {
                type : String,
                required : false,
            } ,
            message : {
                type : String,
                required : false,
            } 
        }
     ],
     tokens :[
         {
             token: {
                 type:String,
                 required :true
             }
         }
     ]
});


userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12);
    }
    if(this.isModified('cpassword')){
        this.cpassword = await bcrypt.hash(this.cpassword,12);
    }
    next();
});
userSchema.methods.generateAuthToken = async function(){
    try {
        let token = jwt.sign({_id:this._id},process.env.SECRET_TOKEN);
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(err){
        console.log(err);
    }
}
userSchema.methods.updateRunning = async function(object){
    try {
        this.currentRequest=this.currentRequest.concat(object);
    }catch(err){
        console.log(err);
    }
}
userSchema.methods.updateHistory = async function(object){
    try {
        this.history=this.history.concat(object);
    }catch(err){
        console.log(err);
    }
}
userSchema.methods.update = async function(){
    try {
        await this.save();
    }catch(err){
        console.log(err);
    }
}
userSchema.methods.removeRunning = async function(){
    try {
        console.log(this.currentRequest,"now");
        this.currentRequest=[];
        console.log(this.currentRequest,"after");
    }catch(err){
        console.log(err);
    }
}
userSchema.methods.getLength= async function(){
    return this.currentRequest.length;
} 
const User=  mongoose.model('User',userSchema);

module.exports = User;