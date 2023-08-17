import mongoose, { trusted } from "mongoose";
const { Schema } = mongoose;


const membersSchema = mongoose.Schema( { 
    name: { 
        type: String,
        required: true
    }, 
    telephone: { 
        type: Number,
     
    },
    dni: { 
        type: Number,
       
    },
    gender: { 
        type: String,
     
    },
    adress: { 
        type: String,
     
    },
    dischargeDate: { 
        type: String,
      
    },
    membership: { 
        type: String,

    },
    medicalRestrictions: { 
        type: String
    },
    lastPay: { 
        type: String,
    },
    dueDate: {
        type: Date
    },
    debtor: { 
        type: Boolean,
        default: false
    },
    upToDate: { 
        type: Boolean,
        default: true
    }

})

const Members = mongoose.model("Members", membersSchema)

export default Members;
