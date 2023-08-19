import express from "express"
const membersRoutes = express.Router()
import { addNewUser, getMemberByDni, getAllMembers, updateMemberPay } from "../controllers/members.js"


membersRoutes.get("/getAllMembers", getAllMembers)
membersRoutes.get("/getMemberData/:id")
membersRoutes.post("/addNewMember", addNewUser)
membersRoutes.put("/editMemberData/:dni", updateMemberPay)
membersRoutes.delete("/deleteMember")
membersRoutes.get("/getMemberByDni/:dni", getMemberByDni)


export default membersRoutes;