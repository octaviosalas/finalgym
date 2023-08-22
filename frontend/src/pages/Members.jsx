import React, { useMemo, useState, useEffect } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { TableCell } from '@mui/material';
import axios from "axios"

const Members = () => {

  const [usersData, setUsersData] = useState([])
  const [load, setLoad] = useState(true)
   
   useEffect(() => { 
      axios.get("http://localhost:4000/getAllMembers")
           .then((res) => { 
            console.log(res.data)
            setUsersData(res.data)
            setTimeout(() => { 
              setLoad(false)
            }, 15000)
           })
           .catch((err) => { 
            console.log(err)
           })
   }, [])

   
   
   const columns = useMemo(
    () => [
      {
        accessorKey: 'name',
        header: 'Member',
        size: 150,
      },
      {
        accessorKey: 'dni',
        header: 'DNI',
        size: 150,
      },
      {
        accessorKey: 'lastPay',
        header: 'Last Pay',
        size: 200,
      },
      {
        accessorKey: 'dueDate',
        header: 'Expiration',
        size: 150,
      },
      {
        accessorKey: 'state',
        header: 'State',
        size: 150,
      },],
      []
  );

  return ( 
    <>
         <div className='mt-2'> 
             <h1 className='text-blue-500'><b>All Members</b></h1>
         </div>
         <div className='mt-6 2xl:w-[1200px] xl:w-[1100px] lg:w-[900px] md:w-[800px] md:ml-[20px] sm:w-[600px] sm:ml-[20px] xxs:w-[500px] xxs:ml-[20px] '>
            <MaterialReactTable columns={columns} data={usersData} />;
         </div>
    
    </>
      
  ) 
};

export default Members;
