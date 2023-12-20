const router = require('express').Router()
const user=require("../model/userSchema")  
const jwt = require('jsonwebtoken')
    router
    .route("/login")
    .post(async (req,res)=>{
        const {email,password} = req.body;
        const result = await user.findOne({ email: email });
        if (!result) {
            return res.status(404).json({
                message: 'email or password invalid !'
            })
        }
        if (result.password != password) {
            return res.status(404).json({
                message: 'email or password invalid !'
            })
        }
        let token_payload = {
            email:result.email,
            userid:result._id
        }
        let token = jwt.sign({token_payload}, 'TEST')
        res.status(200).json({
            token:token
        })
        
    })
        
module.exports=router