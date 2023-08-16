import express from "express"
const classesAndMembershipsRoutes = express.Router()


classesAndMembershipsRoutes.get("/getAllClasses")
classesAndMembershipsRoutes.post("/addNewClass")
classesAndMembershipsRoutes.put("/editClass/:id")
classesAndMembershipsRoutes.delete("/deleteClass")


export default classesAndMembershipsRoutes;