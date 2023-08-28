import mongoose from "mongoose";
const { Schema } = mongoose;


const classesSchema = mongoose.Schema( { 
   name: { 
    type: String,
    required: true
   },
   teacher: { 
    type: String,
    required: true
   },
   schedule: { 
    type: String,
    required: true
   },
   img: { 
    type: String,
    required: true
   },
   day: { 
      type: String
   },
   shift: { 
      type: String
   }


})

const Classes = mongoose.model("Classes", classesSchema)

export default Classes;
