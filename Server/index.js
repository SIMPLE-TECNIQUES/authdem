const express = require('express');
const dotenv=require('dotenv').config();
const cors =require('cors');

const app = express();

app.use('/',require('./routes/authRoutes'))

port=8000;
app.listen(port,()=>console.log(`server is running on port ${port}`));
