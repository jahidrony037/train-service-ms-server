const Ticket = require("../models/ticket.model");
const Train = require("../models/train.model");
const Wallet = require("../models/wallet.model");

const calculateFare = (stops, fromStation, toStation,perFare) => {
    const fromIndex = stops.findIndex(stop => stop.station.equals(fromStation));
    const toIndex = stops.findIndex(stop => stop.station.equals(toStation));
    if (fromIndex === -1 || toIndex === -1 || fromIndex >= toIndex) {
      throw new Error('Invalid route');
    }
    
    const farePerStop = perFare;
    return (toIndex - fromIndex) * farePerStop;
  };


exports.purchaseTicket= async (req,res)=>{
    try {
        const userId = req.user._id;
        const trainId=req.body.train;
        const fromStationId=req.body.from;
        const toStationId=req.body.to;
        // console.log(userId,trainId,fromStationId,toStationId);

        // 1.check the train is exists or not 
        const train = await Train.findById(trainId).populate('stops.station');
        if(!train){
            return res.status(404).json({status:"failed", message:"train not found"});
        }

        // 2.calculate the fare for journey
        const fare = calculateFare(train.stops, fromStationId, toStationId, req.body.fare);
        // console.log(fare);

        // 3.check the wallet balance for user
        const wallet = await Wallet.findOne({userId:userId});
        if (!wallet || wallet.balance < fare) {
            return res.status(400).json({ error: 'Insufficient funds' });
          }

          // 4.create a ticket 
        const ticket = new Ticket({
            user:userId,
            train:trainId,
            from:fromStationId,
            to:toStationId,
            fare:fare
        })
        const ticketResult = await Ticket.create(ticket);

        // 5.calculate the wallet balance 
        wallet.balance-=fare;
        wallet.transactions.push({type:'debit', amount:fare});
        await Wallet.create(wallet);

        res.status(200).json({status:"success", data:ticketResult})

    } catch (error) {
        res.status(500).json({status: "failed", error: error.message});
    }
}