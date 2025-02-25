const express = require('express');
const server=express();
// const connection = require('./connection');
const {Movies,Review}=require ('./Schema');

require("dotenv").config();

const app = express();
const port = 6542;

app.get('/test', (req, res) => {
    res.send('HI');
});

app.post('/movies',async(res,req)=>{
    try{
        const {name,year}=req.body;
        const movies=new Movies({name,year});
        await movies.save();
        res.send(movies);
    }
    catch(error){
        console.log(error);
    }
})

app.listen(port, () => { 
    console.log(`Server is running on http://localhost:${port}`);
});