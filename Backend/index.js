const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app =express();
app.use(express.json());

app.post("/todo",async function(req,res){
    const createPayload=req.body;
    const parsePayload=createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"You sent the wrong Input",
        })
        return;
    }
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"Todo created"
    })


})
app.get("/todos",async function(req,res){
    const todos= await todo.find({});
    res.json({
        todos
    })

})
app.put("/completed",async function(req,res){
    const updatedPayload=req.body;
    const parsePayload=updateTodo.safeParse(updatedPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"You sent the wrong Input",
        })
        return;
    }
   await todo.update({
    _id:req.body.id
   },{
    completed:true

   })
   res.json({
    msg:"Mark as completed"
   })
});
