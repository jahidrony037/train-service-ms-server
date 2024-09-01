const { default: mongoose } = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;

const trainSchema = new mongoose.Schema({
    trainName:{
        type:String,
        required:true
    },
    stops:[
        {
            station:{
                type:ObjectId,
                ref:'Station'
            },
            arrivalTime: Date,
            departureTime: Date
        }
    ]
})

const Train=mongoose.model("Train",trainSchema);
module.exports=Train;