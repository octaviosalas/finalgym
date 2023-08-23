import mongoose from "mongoose";
const { Schema } = mongoose;


const providersSchema = mongoose.Schema( { 
    company: { 
        type: String,
        required: true
    }, 
    cuit: { 
        type: String
    },
    firstPurchaseDate: { 
        type: String,
        required: true,
    },
    companyImage: { 
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
    },
    mail: { 
        type: String
    },
    purchaseDeatil:{
        type: [String] 
    },
    providerType: { 
        type: String
    }

})

const Providers = mongoose.model("Providers", providersSchema)

export default Providers;
