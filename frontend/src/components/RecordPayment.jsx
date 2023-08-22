import React, { useEffect, useState } from 'react'
import addIncome from "../icons/addIncome.png"
import search from "../icons/search.png"
import amountt from "../icons/amount.png"
import userPay from "../icons/userPay.png"
import debtUser from "../icons/debtUser.png"
import userMembership from "../icons/userMembership.png"
import axios from 'axios'
import {useNavigate} from "react-router-dom"


const RecordPayment = ({userData}) => {
      
      const [membershipChoosen, setMembershipChoosen] = useState("")
      const [amount, setAmount] = useState(0)
      const [paymentDate, setPaymentDate] = useState("")
      const [userId, setUserId] = useState("")
      const [userName, setUserName] = useState("")
      const [userDni, setUserDni] = useState("")
      const [backendMsg, setBackendMsg] = useState("")
      const navigate = useNavigate()

      useEffect(() => { 
         if(membershipChoosen === "Free Gym") { 
              setAmount(30)
         } else if(membershipChoosen === "Crossfit") {
            setAmount(25)
         } else if(membershipChoosen === "Functional") { 
            setAmount(20)
         }else if(membershipChoosen === "All Activities") { 
            setAmount(40)
         }else if(membershipChoosen === "Activitie + Free Gym") { 
            setAmount(35)
         } else if(membershipChoosen === "") { 
            setAmount(0)
         }
      }, [membershipChoosen])

      useEffect(() => { 
         userData.map((u) => { 
            setUserId(u._id)
            setUserName(u.name)
            setUserDni(u.dni)
         })
      }, [])

 

     const confirmNewPayment = () => { 
        const newPayData = ({ 
         payerId: userId,
         payerName: userName,
         dateOfPayment: paymentDate,
         amountPaid: amount,
         reasonOfPay: membershipChoosen
        })

      axios.post("http://localhost:4000/addNewIncome", newPayData)
            .then((res) => { 
               console.log(res.data)
            })
            .catch((err) => { 
               console.log(err)
            })

       axios.put(`http://localhost:4000/editMemberData/${userDni}`, {paymentDate: paymentDate})  
            .then((res) => { 
               console.log(res.data)
               setBackendMsg(res.data.message)
               setTimeout(() => { 
                 navigate("/members")
               }, 1500)
            })   
            .catch((err) => { 
               console.log(err)
            })
      }

   //axios.put("http://localhost:4000/modifiedTask", {title: newTitle, description: newDescription, date: newDate, iduser: idUser, idtask: idtask})


  return (
    <div>
            <div className='mt-6'>
         <div className="stats shadow flex flex-col 2xl:w-[500px]">
          
          <div className="stat ">
              <div className="stat-figure text-secondary">
                <img src={userMembership} fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"></img>
              </div>
              <div className="stat-title text-sm">Membership</div>
              <div className="stat-value text-lg">
                <select className='text-center' onChange={(e) => setMembershipChoosen(e.target.value)}>
                        <option></option>
                        <option>Free Gym</option>
                        <option>Crossfit</option>
                        <option>Functional</option>
                        <option>All Activities</option>
                        <option>Activitie + Free Gym</option>
                </select>  
              </div>                          
          </div>
          <div className="stat">
              <div className="stat-figure text-secondary">
              <img src={userPay} fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"></img>
              </div>
              <div className="stat-title text-sm">Pay Date</div>
              <div className="stat-value text-lg">
                <input type='date' className='text-center' onChange={(e) => setPaymentDate(e.target.value)}/> 
              </div>                       
          </div>
          
          <div className="stat">
              <div className="stat-figure text-secondary">
              <img src={amountt} fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"></img>
              </div>
              <div className="stat-title text-sm">Amount</div>
              <div className="stat-value text-lg">{amount} USD</div>
          </div>
      </div>
                  <div className='flex text-center justify-center'>
                      <button className='mt-4 text-white cursor-pointer mr-12 bg-blue-500 hover:bg-white hover:text-blue-500' onClick={() => confirmNewPayment()}><b>Confirm</b></button>
                   </div>
      </div>
      <div className='mt-6'>
        <p className='text-blue-500'><b>{backendMsg}</b></p> 
      </div>
    </div>
  )
}

export default RecordPayment
