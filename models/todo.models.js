import mongoose from "mongoose";
const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    //How we can user one model to another models
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subtodos: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubTodo",
    },
  },
  { timestamps: true }
);
export const Todo = mongoose.model("Todo", todoSchema);
