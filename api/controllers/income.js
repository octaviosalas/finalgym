import Income from "../models/income.js";


export const getAllIncomes = async (req, res) => { 
     Income.find()
           .then((exist) => { 
            res.send(exist)
           })
           .catch((err) => { 
            console.log(err)
           })
}

export const newIncomeToBeRegistered = async (req, res) => { 
    console.log(req.body)
    const {payerName, payerId, dateOfPayment, amountPaid, reasonOfPay} = req.body

    try {
      const formattedDateOfPayment = new Date(dateOfPayment).toISOString().split('T')[0];

        const newIncomeToBeSaved = new Income ({ 
            payerId: payerId,
            payerName: payerName,
            dateOfPayment: formattedDateOfPayment,
            amountPaid: amountPaid,
            reasonOfPay: reasonOfPay
        })
        newIncomeToBeSaved.save()
                          .then((saved) => { 
                            res.send(saved)
                          })
                          .catch((err) => { 
                            console.log(err)
                          })
                             

    } catch (error) {
        console.log(error)
    }
}  

