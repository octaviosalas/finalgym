import express from "express"
const usersRoutes = express.Router()


usersRoutes.get("/getUser")
usersRoutes.get("/getUserData/:id")
usersRoutes.post("/createUser")
usersRoutes.put("/editUserData" )
usersRoutes.delete("/deleteUser" )


export default usersRoutes;