import express from "express"
const expensesRoutes = express.Router()


expensesRoutes.get("/getAllExpenses")
expensesRoutes.post("/addNewExpense")
expensesRoutes.put("/editExpense/:id")
expensesRoutes.delete("/deleteExpense")


export default expensesRoutes;