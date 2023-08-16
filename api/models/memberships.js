import mongoose from "mongoose";
const { Schema } = mongoose;


const membershipsSchema = mongoose.Schema( { 
   name: { 
    type: String,
    required: true
   },
   value: { 
    type: Date,
    required: true
   },
   characteristics: { 
    type: String,
    required: true
   }

})

const Memberships = mongoose.model("Memberships", membershipsSchema)

export default Memberships;
