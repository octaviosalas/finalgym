import express from "express"
const membersRoutes = express.Router()
import { addNewUser } from "../controllers/members.js"


membersRoutes.get("/getAllMembers")
membersRoutes.get("/getMemberData/:id")
membersRoutes.post("/addNewMember", addNewUser)
membersRoutes.put("/editMemberData/:id")
membersRoutes.delete("/deleteMember")


export default membersRoutes;