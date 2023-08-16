import mongoose from "mongoose";
const { Schema } = mongoose;


const staffSchema = mongoose.Schema( { 
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
    startDate: { 
        type: Date,
        required: true
    },
    profileImage: {
        type: String
    },
    position: { 
        type: String
    },
    firstSalary: { 
        type: String
    }
})

const Staff = mongoose.model("Staff", staffSchema)

export default Staff;
