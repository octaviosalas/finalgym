import mongoose from "mongoose";
const { Schema } = mongoose;


const classesSchema = mongoose.Schema( { 
   name: { 
    type: String,
    required: true
   },
   teacher: { 
    type: Date,
    required: true
   },
   schedule: { 
    type: Number,
    required: true
   },
   image: { 
    type: String,
    required: true
   }


})

const Classes = mongoose.model("Classes", classesSchema)

export default Classes;
