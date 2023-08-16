import mongoose from "mongoose";
const { Schema } = mongoose;


const incomeSchema = mongoose.Schema( { 
   payer: { 
    type: String,
    required: true
   },
   dateOfPayment: { 
    type: Date,
    required: true
   },
   amountPaid: { 
    type: Number,
    required: true
   },
   reasonOfPay: { 
    type: String,
    required: true
   }

})

const Income = mongoose.model("Income", incomeSchema)

export default Income;
