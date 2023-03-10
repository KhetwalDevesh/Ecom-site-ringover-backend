const express = require('express');
const cors = require('cors')
// require('dotenv').config();
const app = express();
const router = require('./routes/product.route.js');

app.use(express.json());
app.use(cors());
// res.header( "Access-Control-Allow-Origin" );
app.use('/api/products',router);
app.get('/ping',(req,res)=>{
    res.send("-pong");
})
const PORT = 5000
app.listen(PORT,()=>{
    console.log(`Server running on port no. ${PORT}`);
})

