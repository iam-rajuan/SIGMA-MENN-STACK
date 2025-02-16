import mongoose from "mongoose";
const listSchema = new mongoose.Schema({
  name: String,
  value: Number,
  type: Boolean,
});

export const list = mongoose.model('list', listSchema);
