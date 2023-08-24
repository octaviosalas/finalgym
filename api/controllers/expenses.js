import Expenses from "../models/expenses.js";

export const saveNewExpense = async (req, res) => { 
    const {addressee, dateOfPayment, amountPaid, reasonOfPay } = req.body
    console.log(req.body)

    try {
        const saveTheExpense = new Expenses ({ 
            addressee,
            dateOfPayment,
            amountPaid,
            reasonOfPay
        })
        saveTheExpense.save()
                      .then((saved) => { 
                         res.json({message: "Expense was saved correctly", saved})
                      })
                      .catch((err) => { 
                        console.log(err)
                      })
           
    } catch (error) {
        console.log(error)
    }
}

export const getAllExpenses = async (req, res) => { 
    Expenses.find()
            .then((ex) => { 
                res.send(ex)
            })
            .catch((err) => { 
                console.log(err)
            })
}