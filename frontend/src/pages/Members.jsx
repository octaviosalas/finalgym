import React, { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';


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
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name.firstName', 
        header: 'Member',
        size: 150,
      },
      {
        accessorKey: 'name.lastName',
        header: 'DNI',
        size: 150,
      },
      {
        accessorKey: 'address', 
        header: 'Last Pay',
        size: 200,
      },
      {
        accessorKey: 'city',
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
            <MaterialReactTable columns={columns} data={data} />;
         </div>
    
    </>
      
  ) 
};

export default Members;