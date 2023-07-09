const mongoose = require("mongoose");
const { Schema } = mongoose;

// mongoose connection
const dbconnection = mongoose.connect("mongodb://127.0.0.1:27017/c7db");
//creating schema

// Define the nested schema
// pincode : Number, required
// street : String, required
// phone: String, length=10
const addressSchema = new mongoose.Schema({
  pincode: {
    type: Number,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    maxLength: 10,
  },
});

const taskSchema = new Schema({
  firstName: {
    type: String,
    maxLength: 16,
    required: true,
  },
  lastName: {
    type: String,
    maxLength: 16,
  },
  age: {
    type: Number,
    min: 12,
    max: 100,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email",
    ],
  },
  address: addressSchema,
});
//module takes two arguments (collection,schema)
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
// export default Task;
