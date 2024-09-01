const bcrypt = require('bcryptjs');
exports.verifyPassword = (password,hashPassword)=>{
    const isValidPassword = bcrypt.compareSync(password,hashPassword);
    return isValidPassword;

}