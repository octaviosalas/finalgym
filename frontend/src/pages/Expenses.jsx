import React from 'react'
import telephone from "../icons/telephone.png"
import search from "../icons/search.png"
import calendar from "../icons/calendar.png"
import userPay from "../icons/userPay.png"
import debtUser from "../icons/debtUser.png"
import userMembership from "../icons/userMembership.png"
import { useState, useEffect } from 'react'
import errorUser from "../icons/warning.png"
import axios from 'axios'
import RecordPayment from '../components/RecordPayment'
import { Link } from 'react-router-dom'
import expense from "../icons/expense.png"
import RecordExpense from '../components/RecordExpense'

const Expenses = () => {
    
      const [memberIncome, setMemberIncome] = useState(true)
      const [dni, setDni] = useState("")
      const [userSearchedData, setUserSearchedData] = useState([])
      const [negativeResults, setNegativeResults] = useState("")
      const [showUserInfo, setShowUserInfo] = useState("")
      const [userExpirationDate, setUserExpirationDate] = useState("")
      const [userLastPay, setUserLastPay] = useState("")
      const [showInput, setShowInput] = useState(true)
      const [actualDate, setActualDate] = useState("") 
      const [warning, setWarning] = useState(false)
      const [showRecordPayment, setShowRecordPayment] = useState(false)
      const [providers, setProviders] = useState([])
      const [providerChoosen, setProviderChoosen] = useState("")
      const [providerChoosenData, setProviderChoosenData] = useState([])
      const [providerImage, setProviderImage] = useState([])

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

      const showLastStat = () => { 
        setShowUserInfo(false)
        setShowRecordPayment(true)
        setShowInput(false)

      }

     useEffect(() => { 
       axios.get("http://localhost:4000/getAllProviders")
            .then((res) => { 
              console.log(res.data)
              setProviders(res.data)
            })
            .catch((err) => { 
              console.log(err)
            })
     }, [])

     const showProviderData = () => { 
       axios.get(`http://localhost:4000/getOneProvider/${providerChoosen}`)
            .then((res) => { 
              console.log(res.data)
              const docs = res.data
              setProviderChoosenData(docs)
              docs.map((d) => { 
                setProviderImage(d.companyImage)
              })
            })
            .catch((err) => { 
              console.log(err)
            })
            setTimeout(() => { 
                setShowUserInfo(true)
            }, 500)
     }



  


  return (
        <div className='mt-0'>
            <div class="border border-s-8 border-y-8 rounded-xl flex 2xl:w-[600px] xl:w-[580px] lg:w-[500px] md:w-[500px] sm:w-[450px] xxs:2-[300px] xxxs:w-[290px] min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img class="mx-auto h-24 w-auto" src={expense} alt="Your Company"/>
                    <h2 class="  text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Record Expense</h2>
                </div>

             {memberIncome ? <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="flex">
                        <button type="submit" class="flex w-full m-6 justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline
                        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" onClick={() => setMemberIncome(false)}>New Expense</button>

                        <button className='flex w-full m-6 justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline
                        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>View Expenses</button>
                    </div>
          
                   <p class="mt-10 text-center text-sm text-gray-500">
                      <a href="#" class="font-semibold leading-6 text-blue-500 hover:text-blue-600" >Cancel</a>
                  </p>
             </div> 
                : 
                <>
              { showInput ? <div className='mt-6'>
                     <label className='text-black font-bold mr-6'> Provider</label>
                     <div className='flex'>
                        <select  class="block w-full rounded-md border border-blue-500 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 text-center placeholder:text-gray-400 focus:ring-2 
                        focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" value={providerChoosen} onChange={(e) => setProviderChoosen(e.target.value)}>
                          <option></option>
                          {providers.map((p) => ( 
                             <option className='text-center'>{p.company}</option>
                          ))}
                         </select>
                         <img src={search} className='h-8 ml-2' onClick={() => showProviderData()}></img>
                     </div>
                 </div> : null}
                </>
               
             }

             {showUserInfo ? 
              providerChoosenData.map((p) => ( 
                   <div className='mt-6'>
                          <div className="stats shadow flex flex-col">
                                <div className="stat ">
                                    <div className="stat-figure text-secondary">
                                      <div className="avatar"><div className="w-10 rounded-full"><img src={p.companyImage}/></div></div>
                                    </div>
                                    <div className="stat-title text-sm">Provider</div>
                                    <div className="stat-value text-lg">{p.company}</div>                          
                                </div>
                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                    <img src={calendar} fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"></img>
                                    </div>
                                    <div className="stat-title text-sm">Provider Since</div>
                                    <div className="stat-value text-lg">{p.firstPurchaseDate}</div>                       
                                </div>
                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                    <img src={telephone} fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"></img>
                                    </div>
                                    <div className="stat-title text-sm">Contact</div>
                                    <div className="stat-value text-lg">{p.telephone}</div>                       
                                </div>
                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                    <img src={userMembership} fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"></img>
                                    </div>
                                    <div className="stat-title text-sm">Cuit</div>
                                    <div className="stat-value text-lg">{p.cuit}</div>                       
                                </div>
                            </div>

                            <div className='flex text-center justify-center'>
                              <button className='mt-4 bg-blue-500 hover:bg-black text-white hover:text-blue-500 cursor-pointer mr-12' onClick={() => setShowUserInfo(false)}><b>Cancel</b></button>
                              <button className='mt-4  bg-blue-500 hover:bg-black text-white hover:text-blue-500 cursor-pointer mr-12' onClick={() => showLastStat()}><b>Confirm Provider</b></button>
                            </div>
                   </div>
              ))
               : null }


                {warning ? <div>
                   <p className='mt-6 text-blue-500'><b>{negativeResults}</b></p>
                  <img src={errorUser} fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 mt-2 stroke-current"></img>
                  <p className='cursor-pointer text-sm text-blue-600 mt-6' onClick={() => setWarning(false)}><b>Try Again</b></p>
                 </div> : null}

                 {showRecordPayment ? <RecordExpense providerName={providerChoosen} providerImg={providerImage}/>  : null}
              
             
        </div>
    </div>
  )
}

export default Expenses
