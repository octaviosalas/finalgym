import React from 'react'

const AllIncomesEver = ({amount, showTableData, data}) => {
    console.log(data)
  return (
    <div className='m-6'>
 
    <div className="stats bg-blue-500 text-primary-content w-[300px] mt-6">
        <div className="stat">
          <div className="stat-title font-bold text-black"><b>Account balance</b></div>
          <div className="stat-value">{amount} USD</div>
          <div className="stat-actions">
            <button className="btn btn-sm btn-success bg-blue-200" onClick={showTableData}>View Deatil</button>
          </div>
        </div>
  </div>
    
</div>
  )
}

export default AllIncomesEver
