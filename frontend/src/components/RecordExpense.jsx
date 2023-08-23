import React from 'react'
import amount from "../icons/amount.png"
import calendar from "../icons/calendar.png"

const RecordExpense = ({providerImg}) => {
    
  return (
    <div>
            <div className='mt-6'>
         <div className="stats shadow flex flex-col 2xl:w-[500px]">
            <div>
            <div className="avatar"><div className="w-[160px] h-[40px] rounded-full"><img src={providerImg} /></div></div>
            </div>
          <div className="stat ">
              <div className="stat-figure text-secondary">
                <img src={amount} fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"></img>
              </div>
              <div className="stat-title text-lg">Insert Amount</div>
              <div className="stat-value text-sm">
                <input placeholder='$..' type='number' className="text-center bordder rounded-lg text-lg w-2xl border"/>
              </div>                          
          </div>
          <div className="stat">
              <div className="stat-figure text-secondary">
              <img src={calendar} fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"></img>
              </div>
              <div className="stat-title text-sm">Pay Date</div>
              <div className="stat-value text-lg">
                <input type='date' className='text-center ' /> 
              </div>                       
          </div>
          
          <div className="stat">
              <div className="stat-figure text-secondary">
                <img src={calendar} fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"></img>
              </div>
              <div className="stat-title text-sm">Reason</div>
              <textarea className='border border-blue-500 text-center rounded-lg'></textarea>
          </div>
      </div>
                  <div className='flex text-center justify-center'>
                      <button className='mt-4 text-white cursor-pointer mr-12 bg-blue-500 hover:bg-white hover:text-blue-500' ><b>Confirm</b></button>
                   </div>
      </div>
     
    </div>
  )
}

export default RecordExpense
