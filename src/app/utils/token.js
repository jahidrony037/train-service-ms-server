const jwt = require('jsonwebtoken');

exports.generateToken= (userInfo)=>{
    const payLoad = {
        email:userInfo.email,
        userId:userInfo._id
    }
    const token = jwt.sign(payLoad, process.env.TOKEN_SECRET,{
        expiresIn: "1days",
    })
    return token;
}