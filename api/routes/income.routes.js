import express from "express"
const incomeRoutes = express.Router()


incomeRoutes.get("/getAllIncomes")
incomeRoutes.post("/addNewIncome")
incomeRoutes.put("/editIncome/:id")
incomeRoutes.delete("/deleteIncome")


export default incomeRoutes;