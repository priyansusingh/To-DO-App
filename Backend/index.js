const express = require('express')
const { createToDo, updateToDo } = require('./types')
const { todo } = require('./db')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors());
// respond with "hello world" when a GET request is made to the homepage
app.post('/todo', async(req, res) => {
 const createPayload = req.body;
 const parsedPayload = createToDo.safeParse(createPayload);

 if(!parsedPayload.success){
    res.status(411).json({
        msg:"You sent the wrong inputs"
    })
    return;
 }
 //Put it in mongoDB
   await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed:false
   })

   res.json({
    msg: "ToDo Created"
   })
})

app.get('/todos', async (req,res)=>{
    const todos = await todo.find();
    res.json({
        todos
    })
})

app.put('/completed', async (req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateToDo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }
   await todo.update({
    _id: req.body.id,
   },
   {
    completed:true
   })
   res.json({
    msg:"Your ToDo marked as completed"
   })
})

app.listen(3000)