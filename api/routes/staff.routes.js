import express from "express"
const staffRoutes = express.Router()


staffRoutes.get("/getAllStaf")
staffRoutes.get("/getOneStaffMember/:id")
staffRoutes.post("/createNewStaffMember")
staffRoutes.put("/editDataStaffMember/:id" )
staffRoutes.delete("/deleteStaffMember" )


export default staffRoutes;