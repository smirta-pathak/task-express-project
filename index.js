const express = require('express');          
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());    // using bodyParser to parse POST json data

let taskArray=[];
let count=0;

app.get('/tasks',(req,res)=>{
    res.status(200).json(taskArray);
});

app.get("/tasks/:id", (req, res) => {
    const id  = parseInt(req.params.id);
    console.log("id is "+id);
    const taskFound = taskArray.find((task) => task.id === id);
    console.log(taskFound);
    if(!taskFound)
        return res.status(404).json({"message":`Task with id: ${id} not found`});
    res.status(200).json(taskFound);
});

app.post("/tasks", (req, res) => {
    const task = req.body;
    let newTask = { ...task, id: ++count };
    taskArray.push(newTask);
    res.status(201).json(newTask);
});

app.put("/tasks/:id", (req, res) => {
    const id  = parseInt(req.params.id);
    const {  name, status } = req.body;
  
    const task = taskArray.find((task) => task.id === id);
    
    if(!task){
        return res.status(404).json({"message":`Task with id: ${id} not found`});    
    }  
    task.name = name;
    task.status = status;
      
    res.status(201).json(task);
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});