import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react'
import AllIncomesEver from './AllIncomesEver'
import MonthIncomes from './MonthIncomes'
import AllYearIncomes from './AllYearIncomes'

const IncomesStats = () => {

  const [currentMonth, setCurrentMonth] = useState(0); 
  const [currentYear, setCurrentYear] = useState(0)
  const [allIncomeData, setAllIncomeData] = useState([]) //Todos los ingresos historicos(array completo)
  const [amountAllIncomes, setAmountAllIncomes] = useState("") 
  const [monthIncomes, setMonthIncomes] = useState([]) 
  const [amountMonthIncomes, setAmountMonthIncomes] = useState("")
  const [yearIncomes, setYearIncomes] = useState([])
  const [amountYearIncomes, setAmountYearIncomes] = useState("")


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

 
  return (
    <>
    <div className='flex m-4'>
        
          <AllIncomesEver amount={amountAllIncomes}  data={allIncomeData}/>
         
          <MonthIncomes amount={amountMonthIncomes}  actualMonth={currentMonth} data={monthIncomes}/> 
         
          <AllYearIncomes amount={amountYearIncomes}  actualYear={currentYear} data={yearIncomes}/> 

    </div>
   
    </>
   
  )
}

export default IncomesStats
