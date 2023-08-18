import React, { useMemo, useState, useEffect } from 'react';
import { MaterialReactTable } from 'material-react-table';
import axios from "axios"

const data = [
  {
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
  },
  {
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe',
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy',
    },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
];


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
      },
    ],
    [],
  );

  return ( 
    <>
         <div className='mt-2'> 
             <h1 className='text-blue-500'><b>All Members</b></h1>
         </div>
         <div className='mt-6'>
            <MaterialReactTable columns={columns} data={usersData} />;
         </div>
    
    </>
      
  ) 
};

export default Members;


/*import React, { useMemo, useState, useEffect } from 'react';
import { MaterialReactTable } from 'material-react-table';
import axios from "axios"

const data = [
  {
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
  },
  {
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe',
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy',
    },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
];


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
      },
    ],
    [],
  );

  return ( 
    <>
         <div className='mt-2'> 
             <h1 className='text-blue-500'><b>All Members</b></h1>
         </div>
         <div className='mt-6'>
            <MaterialReactTable columns={columns} data={usersData} />;
         </div>
    
    </>
      
  ) 
};

export default Members;
*/