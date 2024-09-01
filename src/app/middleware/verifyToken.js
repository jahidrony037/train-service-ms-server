const { promisify } = require("util");
const jwt=require('jsonwebtoken');
const { findUserByEmailService } = require("../services/auth.service");

exports.verifyToken = async (req,res,next)=>{
    try {
        
            const token = req?.headers?.authorization?.split(" ")[1];
            // console.log(token?.length);
            if(!token?.length){
                return res.status(403).json({
                    status: "failed",
                    error: "Token not found",
                })
            }
            

            try{
                const decoded = await promisify(jwt.verify)(token,process.env.TOKEN_SECRET);
                // console.log("Decode VAlue: ",decoded);
                if (!decoded?.email) {
                    return res.status(403).json({
                      status: "failed",
                      error: "Token is invalid!",
                    });
                  }
                    const user = await findUserByEmailService(decoded?.email);
              req.user=user;
              next();
            }
            catch (err) {
                console.log('Token verification error:', err.message);
              }

            

            
    } catch (error) {
        res.status(500).json({status:'failed', message:error.message})
    }
}