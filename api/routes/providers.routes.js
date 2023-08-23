import express from "express"
const providersRoutes = express.Router()
import { addProviders, getAllProviders, getOneProvider } from "../controllers/providers.js"


providersRoutes.get("/getAllProviders", getAllProviders)
providersRoutes.get("/getOneProvider/:providerChoosen", getOneProvider)
providersRoutes.post("/createNewProvider", addProviders)
providersRoutes.put("/editProviderData/:id")
providersRoutes.delete("/deleteProvider")


export default providersRoutes;