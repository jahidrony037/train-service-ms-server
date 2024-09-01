const { default: mongoose } = require("mongoose");
const {ObjectId}= mongoose.Schema.Types;
const transactionSchema = new mongoose.Schema({
    type:{
        type:String,
        required:true,
    },
    amount:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now(),
    }
})
const walletSchema = new mongoose.Schema({
    balance: {
        type:Number,
        default:0
    },
    transactions:[transactionSchema],
    userId:{
        type:ObjectId,
        ref:"Auth"
    }
})
const Wallet = mongoose.model('Wallet', walletSchema);
module.exports = Wallet;