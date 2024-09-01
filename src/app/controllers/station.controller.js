const Station = require("../models/station.model");
const { findStationByName } = require("../services/station.service");

exports.createStation= async(req,res)=>{
    try {
        const data = req.body;
        
        // const {stationName,location}=data;
        // console.log(stationName);
        // const alreadyExitsStation = findStationByName(stationName);

        // if(alreadyExitsStation){
        //     return res.status(401).json({status:"failed", message:"this station already exits"});
        // }

        const result = await Station.create(data);
        if(!result){
            return res.status(401).json({status:"failed", message:"station not created"})
        }
        res.status(201).json({status:"success", data:result})

        
    } catch (error) {
        res.status(500).json({status: "failed", error: error.message});
    }

}

exports.getStations=async(req,res)=>{
    try {
        const result = await Station.find();
        res.status(200).json({status:"success", data:result});
    } catch (error) {
        res.status(500).json({status: "failed", error: error.message});
    }
}