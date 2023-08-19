import mongoose from "mongoose";
const { Schema } = mongoose;


const incomeSchema = mongoose.Schema( { 
   payerId: { 
    type: String,
    required: true
   },
   payerName: { 
      type: String
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
