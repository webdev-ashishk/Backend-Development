const mongoose = require("mongoose");
const { Schema } = mongoose;

// mongoose connection
const dbconnection = mongoose.connect("mongodb://127.0.0.1:27017/tasks");
//creating schema
const taskSchema = new Schema({
  name: { type: String, required: true },
  branch: { type: String, required: true },
  rno: { type: Number, unique: true },
  date: { type: Date, default: Date.now },
});
//module takes two arguments (collection,schema)
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
// export default Task;
