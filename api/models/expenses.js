import mongoose from "mongoose";
const { Schema } = mongoose;


const expensesSchema = mongoose.Schema( { 
    addressee: { 
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

const Expenses = mongoose.model("Expenses", expensesSchema)

export default Expenses;
