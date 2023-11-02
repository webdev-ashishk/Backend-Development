import mongoose from "mongoose";
const { Schema } = mongoose;
const userSchema = new Schema({
  userid: {
    type: Number,
    required: true,
    unique: true,
    lowercase: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  useremail: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    lowercase: true,
    uppercase: true,
  },
});

export const User = mongoose.Model("User", userSchema);
//Most asked interview Question: User store in mongodb - users
