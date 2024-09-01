const Station = require("../models/station.model")

exports.findStationByName= async(stationName)=>{
    const result = await Station.findOne({stationName});
    console.log(result)
    return result;
}