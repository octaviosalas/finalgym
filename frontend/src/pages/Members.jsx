import React, { useMemo, useState, useEffect } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { TableCell } from '@mui/material';
import axios from "axios"
import { createTheme, ThemeProvider } from '@mui/material';

const Members = () => {

  const [usersData, setUsersData] = useState([])
  const [load, setLoad] = useState(true)

  /*function calculateMemberStatus(dueDate) {
    console.log("Input dueDate:", dueDate); // Agrega esta línea
    const today = new Date();
    const formattedDueDate = new Date(Date.parse(dueDate));
    formattedDueDate.setHours(0, 0, 0, 0);

    console.log("Formatted dueDate:", formattedDueDate); // Agrega esta línea

    if (formattedDueDate < today) {
        return "Debtor";
    } else {
        return "Active";
    }
}*/
   
   useEffect(() => { 
      axios.get("http://localhost:4000/getAllMembers")
           .then((res) => { 
            console.log(res.data)  
            setUsersData(res.data)
            setTimeout(() => { 
              setLoad(false)
            }, 1200)
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
        accessorKey: 'membership',
        header: 'Membership',
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

  const darkTheme = createTheme({
  palette: {
    mode: "dark",
    text: {
      default: "#29ABCA",

    }
  }
});


  return ( 
    <>
       { load ?  <div>
            <span className="loading loading-ball loading-lg"></span> 
            <span className="loading loading-ball loading-lg"></span>
            <span className="loading loading-ball loading-lg"></span>
        </div> :
        <>
          <div className='mb-6'> 
              <h1 className='text-blue-500'><b>All Members</b></h1>
          </div>
          <div className='mt-8 2xl:w-[1200px] xl:w-[1100px] lg:w-[900px] md:w-[800px] md:ml-[20px] sm:w-[600px] sm:ml-[20px] xxs:w-[500px] xxs:ml-[20px] '>
             <ThemeProvider theme={darkTheme}>
               <MaterialReactTable columns={columns} data={usersData} />;
              </ThemeProvider>
          </div>        
        </>
}
    
    </>
      
  ) 
};

export default Members;

