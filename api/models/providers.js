import mongoose from "mongoose";
const { Schema } = mongoose;


const providersSchema = mongoose.Schema( { 
    company: { 
        type: String,
        required: true
    }, 
    firstPurchaseDate: { 
        type: String,
        required: true,
    },
    location: { 
        type: String, 
        required: true
    },
    totalAmountPaidToDate: {
        type: Number
    },
    purchaseQuantity: { 
        type: String
    },
    telephone: { 
        type: Number
    }
})

const Providers = mongoose.model("Providers", providersSchema)

export default Providers;
