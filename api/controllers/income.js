import Income from "../models/income.js";

export const newIncomeToBeRegistered = async (req, res) => { 
    console.log(req.body)
    const {payerName, payerId, dateOfPayment, amountPaid, reasonOfPay} = req.body

    try {
        const newIncomeToBeSaved = new Income ({ 
            payerId: payerId,
            payerName: payerName,
            dateOfPayment: dateOfPayment,
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

