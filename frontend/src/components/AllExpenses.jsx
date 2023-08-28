import axios from 'axios'
import { useState, useEffect, useMemo } from 'react'
import { MaterialReactTable } from 'material-react-table';
import * as React from 'react';



const AllExpenses = () => {

    const [expenses, setExpenses] = useState([])
    const [load, setLoad] = useState(true)
  
    const columns = useMemo(
        () => [
          {
            accessorKey: 'addressee',
            header: 'Provider',
            size: 150,
          },
          {
            accessorKey: 'amountPaid',
            header: 'Amount',
            size: 150,
            Cell: ({row}) => (
                <p>{row.original.amountPaid} USD</p>
            )
          },
          {
            accessorKey: 'dateOfPayment',
            header: 'Date',
            size: 150,
          },
          {
            accessorKey: 'reasonOfPay',
            header: 'View Reason',
            size: 200,
            Cell: ({ row }) => (
                 <div>
                    <button className="btn" onClick={()=> document.getElementById(row.original._id).showModal()}>Deatil</button>
                    {console.log(row.original._id)}
                      <dialog id={row.original._id} className="modal">
                        <form method="dialog" className="modal-box">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <p className="py-4 text-center font-bold">{row.original.reasonOfPay}</p>
                        </form>
                        </dialog>
               </div>
            ),
          },],
          []
      );

    useEffect(() => { 
        axios.get("http://localhost:4000/getAllExpenses")
             .then((res) => { 
                console.log(res.data)
                setExpenses(res.data)
                setTimeout(() => { 
                   setLoad(false)
                }, 1200)
                 })
              .catch((err) => { 
                  console.log(err)
                })
    }, [])


  return (
    <div>  
         {load ? 
          <div>
              <span className="loading loading-ball loading-lg"></span> 
              <span className="loading loading-ball loading-lg"></span>
              <span className="loading loading-ball loading-lg"></span>
          </div>
            : 
            <div className='2xl:w-[900px]'>
              <MaterialReactTable columns={columns} data={expenses} />;
           </div>
            
         }
    </div>
  )
}

export default AllExpenses
