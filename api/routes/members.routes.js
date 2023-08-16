import express from "express"
const membersRoutes = express.Router()


membersRoutes.get("/getAllMembers")
membersRoutes.get("/getMemberData/:id")
membersRoutes.post("/addNewMember")
membersRoutes.put("/editMemberData/:id")
membersRoutes.delete("/deleteMember")


export default membersRoutes;