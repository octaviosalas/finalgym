import React from 'react'
import amount from "../icons/amount.png"
import calendar from "../icons/calendar.png"
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const RecordExpense = ({providerImg, providerName}) => {

   const [addressee, setAddressee] = useState(providerName)
   const [dateOfPayment, setDateOfPayment] = useState("")
   const [amountPaid, setAmountPaid] = useState("")
   const [reasonOfPay, setReasonOfPay] = useState("")
   const [backendMsg, setBackendMsg] = useState("")
   const [showBackendMsg, setShowBackendMsg] = useState(true)
   const navigate = useNavigate()
   
   const saveNewExpense = () => { 
    const newExpense = ({ 
      addressee,
      dateOfPayment,
      amountPaid,
      reasonOfPay
    })
    axios.post("http://localhost:4000/addNewExpense", newExpense)
         .then((res) => { 
          console.log(res.data)
          setBackendMsg(res.data.message)
          setShowBackendMsg(false)
          setTimeout(() => { 
             navigate("/main")
          }, 1800)
         })
         .catch((err) => { 
          console.log(err)
         })
   }

  return (
    <div>
        
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label htmlFor="username" className="block text-lg font-medium leading-6 text-gray-900"> {providerName} </label>
              <div className="mt-2">
                    <div className="stat-figure text-secondary">
                          <div className="avatar"><div className="w-16 rounded-full"><img src={providerImg}/></div></div>
                    </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Expense Detail</h2>
          <div className="col-span-full">
              <div className="mt-2">
                <input
                  type="number" placeholder='Amount..'  name="street-address" id="street-address" autoComplete="street-address" className=" text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                   placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" onChange={(e) => setAmountPaid(e.target.value)}/>
              </div>
            </div>
            <div className="col-span-full">
              <div className="mt-6">
                <input
                  type="date"  name="street-address" id="street-address" autoComplete="street-address" className=" text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                   placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" onChange={(e) => setDateOfPayment(e.target.value)}/>
              </div>
            </div>
            <div className="col-span-full mt-6">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Reason
              </label>
              <div className="mt-2">
                <textarea  id="about"   name="about" rows={3} className=" text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6" defaultValue={''} onChange={(e) => setReasonOfPay(e.target.value)}/>
              </div>
            </div>
        </div>
      </div>

     {showBackendMsg ?
      <div className='flex text-center justify-center '>
          <button className='text-white bg-blue-500 cursor-pointer m-4 '>Cancel</button>
          <button className='text-white bg-blue-500 cursor-pointer m-4' onClick={() => saveNewExpense()}>Save</button>
      </div> :
      <div className='flex text-center justify-center '>
         <p className='text-blue-500 font-bold'><b>{backendMsg}</b></p>
      </div>
      }
   
     
    </div>
  )
}

export default RecordExpense

