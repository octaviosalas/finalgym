import React from 'react'
import addIncome from "../icons/addIncome.png"
import search from "../icons/search.png"
import userSearched from "../icons/userSearched.png"
import userPay from "../icons/userPay.png"
import debtUser from "../icons/debtUser.png"
import userMembership from "../icons/userMembership.png"
import { useState, useEffect } from 'react'
import errorUser from "../icons/warning.png"
import axios from 'axios'

const Incomes = () => {
    
      const [memberIncome, setMemberIncome] = useState(true)
      const [dni, setDni] = useState("")
      const [userSearchedData, setUserSearchedData] = useState([])
      const [negativeResults, setNegativeResults] = useState("")
      const [showUserInfo, setShowUserInfo] = useState("")
      const [userExpirationDate, setUserExpirationDate] = useState("")
      const [userLastPay, setUserLastPay] = useState("")
      const [otherIncome, setOtherIncome] = useState(true)
      const [actualDate, setActualDate] = useState("") 
      const [warning, setWarning] = useState(false)

      function getActualDate() {
        const fechaActual = new Date();
        const dia = fechaActual.getDate();
        const mes = fechaActual.getMonth() + 1; 
        const anio = fechaActual.getFullYear();
        const fechaFormateada = `${anio}-${mes < 10 ? '0' : ''}${mes}-${dia < 10 ? '0' : ''}${dia}`;
        return fechaFormateada;
      }

      useEffect(() => { 
          setActualDate(getActualDate())
      }, [])

      const searchUserByDni = () => { 
        axios.get(`http://localhost:4000/getMemberByDni/${dni}`)
             .then((res) => { 
              setWarning(false)
              const docs = res.data
              console.log(docs)
              if(res.data.length === 0) { 
                setNegativeResults("There are no registered members with the DNI entered")
                setWarning(true)
              } else {
                 setUserSearchedData(res.data) 
                 setShowUserInfo(true)
                 setUserExpirationDate(res.data.dueDate)
                 setTimeout(() => { 
                  const actualDate = new Date(); 
                  const expirationDate = new Date(userExpirationDate);  
                  if (expirationDate.getTime() < actualDate.getTime()) {
                    console.log("La cuota está vencida");
                  } else {
                    console.log("La cuota no está vencida");
                  }
                   console.log(actualDate)
                 }, 1000)
              }
             })
             .catch((err) => { 
              console.log(err)
             })
      }


  return (
        <div className='mt-0'>
            <div class="border border-s-8 border-y-8 rounded-xl flex 2xl:w-[600px] xl:w-[580px] lg:w-[500px] md:w-[500px] sm:w-[450px] xxs:2-[300px] xxxs:w-[290px] min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img class="mx-auto h-24 w-auto" src={addIncome} alt="Your Company"/>
                    <h2 class="mt-10  text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Record Payment</h2>
                </div>

             {memberIncome ? <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="flex">
                        <button type="submit" class="flex w-full m-6 justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline
                        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" onClick={() => setMemberIncome(false)}>Member</button>

                        <button className='flex w-full m-6 justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline
                        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>Other</button>
                    </div>
          
                   <p class="mt-10 text-center text-sm text-gray-500">
                      <a href="#" class="font-semibold leading-6 text-blue-500 hover:text-blue-600" >Cancel</a>
                  </p>
             </div> 
                : 
                <>
                <div className='mt-4 flex'>
                      <input class="block w-full rounded-md border border-blue-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 text-center placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" 
                      placeholder='Dni..' onChange={(e) => setDni(e.target.value)}>
                      </input>
                      <img src={search} className='h-8 ml-2 cursor-pointer hover:h-10' onClick={() => searchUserByDni()}></img>
                 </div> 
                 <div>
                   
                 </div> 
                </>
               
             }

             {showUserInfo ? 
              userSearchedData.map((u) => ( 
                   <div className='mt-6'>
                          <div className="stats shadow flex flex-col">
                                <div className="stat ">
                                    <div className="stat-figure text-secondary">
                                      <img src={userSearched} fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"></img>
                                    </div>
                                    <div className="stat-title text-sm">Member</div>
                                    <div className="stat-value text-lg">{u.name}</div>                          
                                </div>
                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                    <img src={userPay} fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"></img>
                                    </div>
                                    <div className="stat-title text-sm">Last Pay</div>
                                    <div className="stat-value text-lg">{u.lastPay}</div>                       
                                </div>
                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                    <img src={userPay} fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"></img>
                                    </div>
                                    <div className="stat-title text-sm">Expiration Date</div>
                                    <div className="stat-value text-lg">{u.dueDate}</div>                       
                                </div>
                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                    <img src={userMembership} fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"></img>
                                    </div>
                                    <div className="stat-title text-sm">Membership</div>
                                    <div className="stat-value text-lg">{u.membership}</div>                       
                                </div>
                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                    <img src={debtUser} fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"></img>
                                    </div>
                                    <div className="stat-title text-sm">Has Debt?</div>
                                    <div className="stat-value text-lg">No</div>
                                </div>
                            </div>

                            <div className='flex text-center justify-center'>
                              <p className='mt-4 text-blue-500 cursor-pointer mr-12' onClick={() => setShowUserInfo(false)}><b>Cancel</b></p>
                              <p className='mt-4 text-blue-500 cursor-pointer mr-12'><b>Continue</b></p>
                            </div>
                   </div>
              ))
               : null }


                {warning ? <div>
                   <p className='mt-6 text-blue-500'><b>{negativeResults}</b></p>
                  <img src={errorUser} fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 mt-2 stroke-current"></img>
                  <p className='cursor-pointer text-sm text-blue-600 mt-6' onClick={() => setWarning(false)}><b>Try Again</b></p>
                 </div> : null}
              
             
        </div>
    </div>
  )
}

export default Incomes
