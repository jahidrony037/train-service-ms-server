const express = require('express');
const app = express();
const cors = require('cors');

const authRoutes = require('./app/routes/auth.routes');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(authRoutes);

app.get('/', (req,res)=>{
    res.json({message: "Route is Working nicely YAH!"});
})

module.exports=app;
