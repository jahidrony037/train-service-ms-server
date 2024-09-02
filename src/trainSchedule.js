const cron = require('node-cron');
const Ticket = require('./app/models/ticket.model');

cron.schedule('0 2 * * *', async()=>{
    try {
        const now = new Date();
        
        //expired ticket clears
         await Ticket.deleteMany({travelDate:{$lt: now}});

    } catch (error) {
        res.status(500).json({status:"failed", error:error.message})
    }
})