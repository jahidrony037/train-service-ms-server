const Auth = require("../models/auth.model")

exports.findUserByEmailService=async (email)=>{
    const result = await Auth.findOne({email});
    return result;
}