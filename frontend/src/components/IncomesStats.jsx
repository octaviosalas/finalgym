import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react'
import AllIncomesEver from './AllIncomesEver'
import MonthIncomes from './MonthIncomes'
import AllYearIncomes from './AllYearIncomes'
import TableAllIncomes from './TableAllIncomes'
import TableMonthIncomes from './TableMonthIncomes'
import TableYearIncomes from './TableYearIncomes'

const IncomesStats = () => {

  const [loadingPage, setLoadingPage] = useState(true)
  const [currentMonth, setCurrentMonth] = useState(0); 
  const [currentYear, setCurrentYear] = useState(0)
  const [allIncomeData, setAllIncomeData] = useState([]) //Todos los ingresos historicos(array completo)
  const [amountAllIncomes, setAmountAllIncomes] = useState("") 
  const [monthIncomes, setMonthIncomes] = useState([]) 
  const [amountMonthIncomes, setAmountMonthIncomes] = useState("")
  const [yearIncomes, setYearIncomes] = useState([])
  const [amountYearIncomes, setAmountYearIncomes] = useState("")
  const [showNowAllIncomesTable, setShowNowAllIncomesTable] = useState(false)
  const [showNowMonthincomesTable, setShowNowMonthincomesTable] = useState(false)
  const [showNowYearIncomes, setShowNowYearIncomes] = useState(false)


  function getCurrentMonth() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; 
    return currentMonth;
  }

  function getCurrentYear() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() ; 
    return currentYear;
  }

  useEffect(() => { 
    const month = getCurrentMonth();
    setCurrentMonth(month)
    const year = getCurrentYear()
    setCurrentYear(year)
     axios.get("http://localhost:4000/getAllIncomes")
          .then((res) => { 
            const docs = res.data
            setAllIncomeData(docs)
            const sumAmount = docs.reduce((accumulator, obj) => accumulator + obj.amountPaid, 0);
            setAmountAllIncomes(sumAmount)
            setTimeout(() => { 
               setLoadingPage(false)
            }, 1500)
          })
          .catch((err) => { 
            console.log(err)
          })
  }, [])

  useEffect(() => { 
    const incomesOfTheMonth = allIncomeData.filter((item) => { 
      const itemDateOfPay = new Date(item.dateOfPayment)
      return itemDateOfPay.getMonth() + 1 === currentMonth
      })
      setTimeout(() => { 
        setMonthIncomes(incomesOfTheMonth)
      }, 1000)
      
  }, [currentMonth, allIncomeData])

  useEffect(() => { 
    const incomesOfTheYear = allIncomeData.filter((item) => { 
      const itemDateOfPay = new Date(item.dateOfPayment)
      return itemDateOfPay.getFullYear() === currentYear
    })
    setTimeout(() => { 
      setYearIncomes(incomesOfTheYear)
    })
  }, [currentYear, currentMonth, allIncomeData])

  useEffect(() => { 
          const amountMonthIncomes = monthIncomes.reduce((accumulator, obj) => accumulator + obj.amountPaid, 0)
          setAmountMonthIncomes(amountMonthIncomes)
          const amountYearIncomes = yearIncomes.reduce((accumulator, obj) => accumulator + obj.amountPaid, 0)
          setAmountYearIncomes(amountYearIncomes)
  }, [monthIncomes, currentMonth, yearIncomes])

  const showAllIncomesTable = () => { 
    setShowNowAllIncomesTable(true) 
  }

  const dontShowTableAllIncomes = () => { 
    setShowNowAllIncomesTable(false) 
  }

  const showMonthIncomesTable = () => {
    setShowNowMonthincomesTable(true)
  }

  const dontShowMonthIncomesTable = () => { 
    setShowNowMonthincomesTable(false) 
  }

  const showYearIncomesTable = () => { 
    setShowNowYearIncomes(true)
  }

  const dontShowYearIncomesTable = () => { 
    setShowNowYearIncomes(false)
  }

 
  return (
    <>
    <div className=' m-4'>
        
         {loadingPage ? 
          <div>
            <span className="loading loading-ball loading-lg"></span> 
            <span className="loading loading-ball loading-lg"></span>
            <span className="loading loading-ball loading-lg"></span>
        </div> 
        : 
        <div className='flex mt-4'> 
        <AllIncomesEver amount={amountAllIncomes}  data={allIncomeData} showTableData={showAllIncomesTable} />
         
         <MonthIncomes amount={amountMonthIncomes}  actualMonth={currentMonth} data={monthIncomes} showTableData={showMonthIncomesTable}/> 
        
         <AllYearIncomes amount={amountYearIncomes}  actualYear={currentYear} data={yearIncomes} showTableData={showYearIncomesTable}/>
        </div> }
        

        {showNowAllIncomesTable ? <TableAllIncomes data={allIncomeData} amount={amountAllIncomes} close={dontShowTableAllIncomes}/> : null}
        {showNowMonthincomesTable ? <TableMonthIncomes data={monthIncomes} amount={amountMonthIncomes} close={dontShowMonthIncomesTable}/> : null}
        {showNowYearIncomes ? <TableYearIncomes data={yearIncomes} amount={amountYearIncomes} close={dontShowYearIncomesTable}/> : null}
        
  
    </div>
   
    </>
   
  )
}

export default IncomesStats
