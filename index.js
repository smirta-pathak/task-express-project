const express = require('express');          
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());    // using bodyParser to parse POST json data

let taskArray=[];
let count=0;

app.get('/tasks',(req,res)=>{
    res.status(200).json(taskArray);
});

app.post("/tasks", (req, res) => {
    const task = req.body;
    let newTask = { ...task, id: ++count };
    taskArray.push(newTask);
    res.status(201).json(newTask);
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});



