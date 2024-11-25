const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://ashwinpatel2029:<j6RqLH9zJ9T7awIi>@cluster0.mtejy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const todosSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
}
)

const todo=mongoose.model('todos',todosSchema);
module.exports={
    todo
}

