import express from "express"
const expensesRoutes = express.Router()
import { saveNewExpense, getAllExpenses } from "../controllers/expenses.js"


expensesRoutes.get("/getAllExpenses", getAllExpenses)
expensesRoutes.post("/addNewExpense", saveNewExpense)
expensesRoutes.put("/editExpense/:id")
expensesRoutes.delete("/deleteExpense")


export default expensesRoutes;