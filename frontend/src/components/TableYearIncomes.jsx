import React, { useMemo, useState, useEffect } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { createTheme, ThemeProvider } from '@mui/material';


const TableYearIncomes = ({data, amount, close}) => {

    const [loadingTable, setLoadingTable] = useState(true)

    useEffect(() => { 
       setTimeout(() => { 
          setLoadingTable(false)
       }, 1000)
    }, [])

    const columns = useMemo(
        () => [
          {
            accessorKey: 'payerName',
            header: 'Member',
            size: 150,
          },
          {
            accessorKey: 'reasonOfPay',
            header: 'Reason',
            size: 150,
          },
          {
            accessorKey: 'dateOfPayment',
            header: 'Date',
            size: 150,
          },
          {
            accessorKey: 'amountPaid',
            header: 'Amount',
            size: 200,
          },
          {
            accessorKey: 'total', 
            header: `Total: ${amount} USD`,
            size: 150,
          },],
          []
      );

      const darkTheme = createTheme({ 
        palette: { 
            mode: "dark",
        }
    })

  return (
    <div>
      { loadingTable ? 
       <div className='mt-6'>
       <span className="loading loading-ball loading-lg"></span> 
       <span className="loading loading-ball loading-lg"></span>
       <span className="loading loading-ball loading-lg"></span>
   </div> :

   <div>
   <ThemeProvider theme={darkTheme}>
      <MaterialReactTable columns={columns} data={data}  />
    </ThemeProvider>
        <div className='mt-6'>
        <p className='text-blue-600 cursor-pointer underline' onClick={close}> <b>Close</b></p>
        </div>
   </div>}
      
   </div>
  )
}

export default TableYearIncomes
