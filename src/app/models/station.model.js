const { default: mongoose } = require("mongoose");
const { trim } = require("validator");

const stationSchema = new mongoose.Schema({
    stationName:{
        type:String,
        required:true,
        unique:true,
    },
    location:{
        type:String,
        required:true
    }
})

const Station = mongoose.model("Station", stationSchema);
module.exports = Station;