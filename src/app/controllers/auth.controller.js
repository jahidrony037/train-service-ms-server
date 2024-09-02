const Auth = require("../models/auth.model");
const { findUserByEmailService } = require("../services/auth.service");
const {generateToken} = require('../utils/token');
const { verifyPassword } = require("../utils/verifyPassword");

exports.singUP= async (req,res)=>{
    try {
        // const {name,email,password,mobileNumber}=req.body;
        const data = req.body;
        const {email,accountType}=data;
        if(accountType==="admin"){
            return res.status(400).json({message:"sorry you can not register as an admin"});
        }
        let user = await Auth.findOne({email});
        if(user){
            return res.status(400).json({message:"User Already Exists"});
        }
        

        const result = await Auth.create(data);
        // console.log('result', result);

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
        res.status(500).json({status: "failed", error: error.message});
    }

}

exports.login = async (req,res)=>{
    try {
        const {email, password}= req.body;
        // console.log("email: ",email);
        if(!email || !password){
            return res.status(401).json({
                status: "failed",
                error: "please give your right credentials",
              });
        }

        const user = await findUserByEmailService(email);
        // console.log(user);
        if (!user) {
            return res.status(401).json({
              status: "failed",
              error: "no result found with this email",
            });
          }

          const isValidPassword = verifyPassword(password, user?.password);
          if (!isValidPassword) {
            return res.status(401).json({
              status: "failed",
              error: "password not correct",
            });
          }

          const token = generateToken(user);
          if(token){
            res.status(200).json({
                status: "success",
                message: "successfully logged in",
                data: user,
                token,
              });
          }








    } catch (error) {
        res.status(400).json({
            status: "failed",
            error: error.message,
          });
    }
}

exports.getAllUsers = async(req,res)=>{
  try {
      const result = await Auth.find().select('-password');
      if(!result){
        return res.status(401).json({status:"failed", message:"not founds!"})
      }
      res.status(200).json({status:"success", data:result});
  } catch (error) {
    res.status(500).json({status: "failed", error: error.message});
  }
}