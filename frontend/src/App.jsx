import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Main from './pages/Main'
import { Route, Routes } from 'react-router-dom'
import Members from './pages/Members'
import AddNewMember from './pages/AddNewMember'
import Incomes from './pages/Incomes'
import Expenses from './pages/Expenses'
import Classes from './pages/Classes'
import Providers from './pages/Providers'
import Staff from './pages/Staff'
import Config from './pages/Config'
import Profile from './pages/Profile'
import OneMemberData from './components/OneMemberData'
import IncomesStats from './components/IncomesStats'
import AllExpenses from './components/AllExpenses'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
         <Sidebar />
            <Routes>
                <Route path='/' element={<Main/>}></Route>
                <Route path='/main' element={<Main/>}></Route>
                <Route path='/members' element={<Members/>}></Route>
                <Route path='/addNewMember' element={<AddNewMember/>}></Route>
                <Route path='/incomes' element={<Incomes/>}></Route>
                <Route path='/memberData/:dni' element={<OneMemberData/>}></Route>
                <Route path='/expenses' element={<Expenses/>}></Route>
                <Route path='/classes' element={<Classes/>}></Route>
                <Route path='/providers' element={<Providers/>}></Route>
                <Route path='/staff' element={<Staff/>}></Route>
                <Route path='/config' element={<Config/>}></Route>
                <Route path='/profile' element={<Profile/>}></Route>
                <Route path='/allIncomes' element={<IncomesStats/>}></Route>
                <Route path='/allExpenses' element={<AllExpenses/>}></Route>
            </Routes>

      </div>
    </>
  )
}

export default App
