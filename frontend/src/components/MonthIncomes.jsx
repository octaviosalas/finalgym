import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react'

const MonthIncomes = ({amount, actualMonth, data, showTableData}) => {
    console.log(data)
  return (
    <> 

            <div className="stats  bg-blue-500 text-primary-content m-6">
                    <div className="stat">
                        <div className="stat-title font-bold text-black"><b>Total Incomes about Month {actualMonth}</b></div>
                        <div className="stat-value">{amount} USD</div>
                        <div className="stat-actions">
                          <button className="btn btn-sm btn-success  bg-blue-200" onClick={showTableData}>View Detail</button>
                        </div>
                   </div>
            </div>   
            <div>
                
            </div> 
    </>

  )
}

export default MonthIncomes
