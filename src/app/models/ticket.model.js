const { default: mongoose } = require("mongoose");
const {ObjectId}= mongoose.Schema.Types;

const ticketSchema = new mongoose.Schema({
    user:{
        type:ObjectId,
        ref:"Auth"
    },
    train:{
        type:ObjectId,
        ref:"Train",
    },
    from:{
        type:ObjectId,
        ref:"Station",
    },
    to:{
        type:ObjectId,
        ref:"Station"
    },
    fare:Number,
    purchaseDate:{
        type:Date,
        default:Date.now(),
    }
})
const Ticket = mongoose.model('Ticket', ticketSchema);
module.exports = Ticket;