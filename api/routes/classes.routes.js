import express from "express"
const classesRoutes = express.Router()


classesRoutes.get("/getAllClasses")
classesRoutes.post("/addNewClass")
classesRoutes.put("/editClass/:id")
classesRoutes.delete("/deleteClass")


export default classesRoutes;