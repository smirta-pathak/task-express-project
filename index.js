const express = require('express');
const app = express();

let tasks=[];
let count=0;

app.get('/tasks',(req,res)=>{
    res.status(200).json(tasks);
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});

