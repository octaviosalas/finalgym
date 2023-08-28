import express from "express"
const classesAndMembershipsRoutes = express.Router()
import { getAllClasses } from "../controllers/classes.js"


classesAndMembershipsRoutes.get("/getAllClasses", getAllClasses)
classesAndMembershipsRoutes.post("/addNewClass")
classesAndMembershipsRoutes.put("/editClass/:id")
classesAndMembershipsRoutes.delete("/deleteClass")


export default classesAndMembershipsRoutes;