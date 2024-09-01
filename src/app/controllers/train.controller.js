const Train = require("../models/train.model");

exports.addTrain = async (req,res)=>{
    try {
        const data = req.body;
        const result = await Train.create(data);
        console.log(result);
        if(!result){
            return res.status(401).json({status:"failed", message:"train not created"})
        }
        res.status(201).json({status:"success", data:result})

    } catch (error) {
        res.status(500).json({status: "failed", error: error.message});
    }
}

exports.getTrain= async(req,res)=>{
    try {
        const result = await Train.find();
        if(!result){
            return res.status(401).json({status:"failed", message:"not found"})
        }
        res.status(200).json({status:"success", data:result})
    } catch (error) {
        res.status(500).json({status: "failed", error: error.message});
    }
}

exports.singleTrain=async(req,res)=>{
    try {
        const id= req.params.id;
        console.log(id);
        const result = await Train.findOne({_id:id});
        if(!result){
            return res.status(401).json({status:"failed", message:"not found"})
        }
        res.status(200).json({status:"success", data:result})
    } catch (error) {
        res.status(500).json({status: "failed", error: error.message});
    }
}