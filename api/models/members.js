import mongoose from "mongoose";
const { Schema } = mongoose;


const membersSchema = mongoose.Schema( { 
    name: { 
        type: String,
        required: true
    }, 
    telephone: { 
        type: Number,
        required: true
    },
    dni: { 
        type: Number,
        required: true
    },
    gender: { 
        type: String,
        required: true
    },
    dischargeDate: { 
        type: String,
        required: true,
    },
    membership: { 
        type: String,
        required: true
    },
    medicalRestrictions: { 
        type: String,
        required: true
    },
    lastPay: { 
        type: String, 
        required: true
    },
    dueDate: {
        type: Date
    },
    debtor: { 
        type: Boolean
    },
    upToDate: { 
        type: Boolean
    },

})

const Members = mongoose.model("Members", membersSchema)

export default Members;
