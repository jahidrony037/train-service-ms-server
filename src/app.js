const express = require('express');
const app = express();
const cors = require('cors');

const authRoutes = require('./app/routes/auth.routes');
const stationRoutes = require('./app/routes/station.routes');
const trainRoutes = require('./app/routes/train.routes');
const walletRoutes= require('./app/routes/wallet.routes');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/station',stationRoutes);
app.use('/api/v1/train',trainRoutes);
app.use('/api/v1/wallet',walletRoutes )

app.get('/', (req,res)=>{
    res.json({message: "Route is Working nicely YAH!"});
})

module.exports=app;
