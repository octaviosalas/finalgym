import express from "express"
const incomeRoutes = express.Router()
import {newIncomeToBeRegistered} from "../controllers/income.js"


incomeRoutes.get("/getAllIncomes")
incomeRoutes.post("/addNewIncome", newIncomeToBeRegistered)
incomeRoutes.put("/editIncome/:id")
incomeRoutes.delete("/deleteIncome")


export default incomeRoutes;