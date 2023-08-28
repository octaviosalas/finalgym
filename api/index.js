import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import staffRoutes from "./routes/staff.routes.js"
import usersRoutes from "./routes/users.routes.js"
import providersRoutes from "./routes/providers.routes.js"
import membersRoutes from "./routes/members.routes.js"
import incomeRoutes from "./routes/income.routes.js"
import expensesRoutes from "./routes/expenses.routes.js"
import classesAndMembershipsRoutes from "./routes/classesAndMemberships.routes.js"
import connectDataBase from "./database/connectdb.js"



const app = express()
const port = 4000

app.use(express.json())
app.use(express.text())
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({type:"*/*"}))
app.use(express.urlencoded({extended:true}))

app.use(staffRoutes)
app.use(usersRoutes)
app.use(providersRoutes)
app.use(membersRoutes)
app.use(incomeRoutes)
app.use(expensesRoutes)
app.use(classesAndMembershipsRoutes)


app.get('/', (req, res) => {
    res.send('Hi! Welcome..')
  })

app.listen(4000, () => { 
    console.log(`Sever NodeJs at AdminGymApp is connected Correctly at Port ${port}`)
    connectDataBase()
   
 
})