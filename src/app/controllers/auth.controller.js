const Auth = require("../models/auth.model");
const {generateToken} = require('../utils/token');

exports.singUP= async (req,res)=>{
    try {
        // const {name,email,password,mobileNumber}=req.body;
        const data = req.body;
        const {email}=data;
        let user = await Auth.findOne({email});
        if(user){
            return res.status(400).json({message:"User Already Exists"});
        }

        const result = await Auth.create(data);
        console.log('result', result);

        if(result){
            
            const token = generateToken(result);
            // console.log("token ",token);
            res.status(200).json({
                status: "success",
                message: "Signup successful",
                token:token,
              });
        }
        
    } catch (error) {
        res.status(500).json({status: "failed", message: error.message});
    }

}