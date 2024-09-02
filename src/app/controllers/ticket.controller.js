
const calculateFare = (stops, fromStation, toStation) => {
    const fromIndex = stops.findIndex(stop => stop.station.equals(fromStation));
    const toIndex = stops.findIndex(stop => stop.station.equals(toStation));
    if (fromIndex === -1 || toIndex === -1 || fromIndex >= toIndex) {
      throw new Error('Invalid route');
    }
    
    const farePerStop = 20;
    return (toIndex - fromIndex) * farePerStop;
  };


exports.purchaseTicket= async (req,res)=>{
    try {
        const data = req.body;
        console.log(data);

    } catch (error) {
        res.status(500).json({status: "failed", error: error.message});
    }
}