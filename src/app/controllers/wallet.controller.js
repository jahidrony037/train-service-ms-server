const Wallet = require("../models/wallet.model");

exports.addFunds = async (req,res)=>{
    try {
            const {userId,balance,transactions}= req.body;
            // const {amount}=req.body?.transaction;
            // console.log(req.body?.transaction);
            
           
            let wallet = await Wallet.findOne({userId:userId});
            
            if(!wallet){
                wallet = new Wallet({userId:userId});
            }
            // console.log("before transactions",wallet);
            wallet.balance+=balance;
            // console.log('balance',wallet.balance);
            transactions.forEach(transaction => {
                wallet.transactions.push(
                    {type:'credit', amount:transaction.amount}
                )
            });
            
            
            
            const result = await Wallet.create(wallet);
            console.log(result);

            if(!result){
                return res.status(401).json({status:"failed", message:"amount not added"})
            }

            res.status(201).json({status:"success", data:result});



    } catch (error) {
        res.status(500).json({status:"failed",error: error.message });
    }
} 

exports.getWallet= async(req,res)=>{
    try {
        const result = await Wallet.findOne({ userId: req.user._id });
    res.status(201).json({status:"success",data:result});
    } catch (error) {
        res.status(500).json({status:"failed",error: error.message });
    }
}