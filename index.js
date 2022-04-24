const express = require('express');
const app = express();
const dotenv = require('dotenv')
const path = require("path")
const fs = require('fs')
dotenv.config()

const PORT=process.env.PORT || 80


app.get('/',(req,res)=>{
    res.json({msg:'HOME PAGE'});
})



app.listen(9999, () => {
    console.log("I am listening to port 9999")
})