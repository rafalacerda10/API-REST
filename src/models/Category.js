import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
   {
     id: {type:String},
    name: {type:String, required:true},
   },
);
const category = mongoose.model('category', categorySchema);

export default category;