import mongoose from "mongoose";
const { Schema } = mongoose;


const membersSchema = mongoose.Schema( { 
    name: { 
        type: String,
        required: true
    }, 
    dischargeDate: { 
        type: String,
        required: true,
    },
    lastPay: { 
        type: String, 
        required: true
    },
    nextPay: {
        type: Number
    },
    PurchaseQuantity: { 
        type: String
    },
    telephone: { 
        type: Number
    }
})

const Members = mongoose.model("Members", membersSchema)

export default Members;
