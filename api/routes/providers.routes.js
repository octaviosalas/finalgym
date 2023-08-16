import express from "express"
const providersRoutes = express.Router()


providersRoutes.get("/getAllProviders")
providersRoutes.get("/getOneProvider/:id")
providersRoutes.post("/createNewProvider")
providersRoutes.put("/editProviderData/:id")
providersRoutes.delete("/deleteProvider")


export default providersRoutes;