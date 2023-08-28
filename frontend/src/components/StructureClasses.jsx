import React from 'react'

const StructureClasses = ({monday}) => {
  return (
    <>
      <div className=''>
              <div className="card w-96 bg-base-100 m-2 shadow-blue-400 shadow-2xl custom-shadow">
                  <div className='flex'>
                          <div>
                          <div className="avatar mt-8">
                              <div className="w-24 rounded-full">
                                <img src={monday.img} />
                              </div>
                        </div>
                          </div>
                          <div className="card-body">
                        <h2 className="card-title font-bold"> {monday.name}
                          <div className="badge bg-blue-400">{monday.day}</div>
                        </h2>
                        <p className='badge underline'>{monday.shift}</p>
                        <div className="justify-center ">
                          <p>{monday.teacher}</p>  
                        </div>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Delete</div> 
                            <div className="badge badge-outline">Edit</div>
                        </div>
                    </div>
                  </div>
              </div>    
          </div>  
    </>
   
  )
}

export default StructureClasses
