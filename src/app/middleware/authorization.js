exports.authorization = (...role)=>{
    return (req,res,next) => {
        try {
            const userRole = req?.user?.accountType;
            // console.log("userRole : ",req?.user);
            if(!role.includes(userRole)){
                return res.status(403).json({
                    status: "failed",
                    error: "sorry you are not authorized",
                  });
            }
            next();
        } catch (error) {
            res.status(403).json({
              status: "failed",
              error: error.message,
            });
          }
    }
}