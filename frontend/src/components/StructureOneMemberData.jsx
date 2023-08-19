import React, { useEffect, useState } from 'react'
import search from "../icons/search.png"
import userSearched from "../icons/userSearched.png"
import userPay from "../icons/userPay.png"
import debtUser from "../icons/debtUser.png"
import userMembership from "../icons/userMembership.png"
import { Link } from 'react-router-dom'

const StructureOneMemberData = ({user}) => {

    const [userFinded, setUserFinded] = useState(true)
    
    useEffect(() => { 
       if(user.length === 0) { 
        setUserFinded(false)
       }
    }, [])

  return (
    <>  
        {userFinded ? <div>
            <h2 className='text-blue-500 text-xl'><b>Info about Member {user.map((u) => <p className='text-sm'>{u.dni}</p>)}</b></h2>
        </div> : null}
     {user.map((u) => ( 
        <div className='mt-6'>
         <div className="stats shadow flex flex-col 2xl:w-[500px]">
           <div className="stat ">
              <div className="stat-figure text-secondary">
                <img src={userSearched} fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"></img>
              </div>
              <div className="stat-title text-sm">Member</div>
              <div className="stat-value text-lg">{u.name}</div>                          
          </div>
          <div className="stat ">
              <div className="stat-figure text-secondary">
                <img src={userSearched} fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"></img>
              </div>
              <div className="stat-title text-sm">Member Since</div>
              <div className="stat-value text-lg">{u.dischargeDate}</div>                          
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
                <Link to={"/incomes"}><button className='mt-4 text-white cursor-pointer mr-12 bg-blue-500 hover:bg-white hover:text-blue-500' ><b>Record Member Pay</b></button></Link>  
                <button className='mt-4 text-white cursor-pointer mr-12 bg-blue-500  hover:bg-white hover:text-blue-500' ><b>Unsuscribe</b></button>
            </div>
      </div>
     ))}
      
    </>
  
  )
}

export default StructureOneMemberData
