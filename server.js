const express = require('express');
const server=express();

require("dotenv").config();

const app = express();
const port = 6542;

app.get('/test', (req, res) => {
    res.send('HI');
}); 


app.listen(port, () => { 
    console.log(`Server is running on http://localhost:${port}`);
});