const { default: mongoose } = require("mongoose");
const bcrypt = require('bcryptjs');
const validator = require ('validator');
const { userRole } = require("../constants");
const {ObjectId} = mongoose.Schema.Types;

const authSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            validate: [validator.isEmail, "Please provide a valid Email"],
        },
        mobileNumber:{
            type:String,
            unique:true,
            validate:[validator.isMobilePhone, "Please provide a valid phone number"],
        },
        password:{
            type:String,
            required:true,
            message:"Please Enter a Password"
        },
        accountType:{
            type:String,
            enum:{
                values: [userRole.user, userRole.admin],
                message:"{VALUE} can't be an account type",
            }
        },
        wallet:{
            type:ObjectId,
            ref:"Wallet"
        },
        user:{
            type:ObjectId,
            ref:"User"
        },
        admin:{
            type:ObjectId,
            ref:"Admin"
        },
        createdAt:{
            type:Date,
            default: Date.now()
        }
    },
    {
        timestamps:true
    }
)

authSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    const salt = await bcrypt.genSaltSync(10);
    this.password=await bcrypt.hashSync(this.password,salt);
    next();
})

const Auth = mongoose.model("Auth", authSchema);
module.exports = Auth;