import mongoose from "mongoose";
const { Schema } = mongoose;


const usersSchema = mongoose.Schema( { 
    name: { 
        type: String,
        required: true
    }, 
    email: { 
        type: String,
        required: true,
        unique: true
    },
    telephone: { 
        type: String, 
        required: true
    },
    profileImage: {
        type: String
      },
      charge: { 
        type: String
      },
    password: { 
        type: String,
        required: true
    },
})

const User = mongoose.model("User", usersSchema)

export default User;
