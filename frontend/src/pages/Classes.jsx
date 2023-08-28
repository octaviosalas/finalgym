import React from 'react'
import axios from "axios"
import {useState, useEffect} from "react"
import StructureClasses from '../components/StructureClasses'
import ClassesMonday from '../components/ClassesMonday'
import ClassesThursday from '../components/ClassesThursday'
import ClassesTuesday from '../components/ClassesTuesday'
import ClassesWednesday from '../components/ClassesWednesday'
import ClassesFriday from '../components/ClassesFriday'



const Classes = () => {

      const [allClasses, setAllClasses] = useState([])

      const [fridayClasses, setFridayClasses] = useState([])
      const [showAllClasses, setShowAllClasses] = useState(true)
      const [showMonday, setShowMonday] = useState(false)
      const [showTuesday, setShowTuesday] = useState(false)
      const [showWednesday, setShowWednesday] = useState(false)
      const [showThursday, setShowThursday] = useState(false)
      const [showFriday, setShowFriday] = useState(false)

      useEffect(() => { 
        axios.get("http://localhost:4000/getAllClasses")
            .then((res) => { 
              const docs = res.data
              setAllClasses(docs)
             
            })
            .catch((err) => { 
              console.log(err)
            })
      }, [])

      const handleShowMonday = () => { 
        setShowMonday(true)
        setShowAllClasses(false)
      }

      
      const handleShowTuesday = () => { 
        setShowTuesday(true)
        setShowAllClasses(false)
      }

      
      const handleShowWednesday = () => { 
        setShowWednesday(true)
        setShowAllClasses(false)
      }

      
      const handleShowThursday = () => { 
        setShowThursday(true)
        setShowAllClasses(false)
      }

      
      const handleShowFriday = () => { 
        setShowFriday(true)
        setShowAllClasses(false)
      }

      const closeAll = () => { 
        setShowMonday(false)
        setShowTuesday(false)
        setShowWednesday(false)
        setShowThursday(false)
        setShowFriday(false)
        setShowAllClasses(true)
      }
  

  return (
    <div> 
      {showAllClasses ?
      <>
       <div className='flex justify-center'> 
          <button onClick={() => handleShowMonday()} className='btn bg-blue-400 text-white hover:text-blue-400 hover:bg-black m-2'>Monday</button>
          <button onClick={() => handleShowTuesday()} className='btn bg-blue-400 text-white hover:text-blue-400 hover:bg-black m-2'>Tuesday</button>
          <button onClick={() => handleShowWednesday()} className='btn bg-blue-400 text-white hover:text-blue-400 hover:bg-black m-2'>Wednesday</button>
          <button onClick={() => handleShowThursday()} className='btn bg-blue-400 text-white hover:text-blue-400 hover:bg-black m-2'>Thursday</button>
          <button onClick={() => handleShowFriday()} className='btn bg-blue-400 text-white hover:text-blue-400 hover:bg-black m-2'>Friday</button>
        </div>

      
       <div>
            <h2 className='font-bold mt-6 text-xl'>All Classes</h2>
                <div className='flex flex-row flex-wrap justify-center'>
                    {allClasses.map((c) => ( 
                      <div className="card w-96 bg-base-100 m-2 shadow-blue-400 shadow-2xl custom-shadow">
                          <div className='flex'>
                                  <div>
                                    <div className="avatar mt-8">
                                        <div className="w-24 rounded-full"> <img src={c.img} /> </div>
                                    </div>
                                  </div>

                                  <div className="card-body">
                                    <h2 className="card-title font-bold"> {c.name}
                                        <div className="badge  bg-blue-400">{c.day}</div>
                                    </h2>
                                    <p className="badge  bg-blue-400">{c.schedule} - {c.shift}</p>
                                 

                                    <div className="justify-center ">
                                       <p><b>{c.teacher}</b></p>  
                                    </div>
                                       <div className="card-actions ">
                                       <div className="badge badge-outline">Delete</div> 
                                       <div className="badge badge-outline">Edit</div>
                                   </div>
                              </div>
                           </div>
                       </div>    
                     ))}
                  </div> 
                </div>
      </>
       
                :
              null}

            {showMonday ?
                <div className='flex flex-row flex-wrap ml-12'>
                   <ClassesMonday close={closeAll}/>
                </div>
              : null}

             {showTuesday ?
                <div className='flex flex-row flex-wrap ml-12'>
                    <ClassesTuesday close={closeAll}/>
                  </div>
              : null}

            {showWednesday ?
                <div className='flex flex-row flex-wrap ml-12'>
                     <ClassesWednesday close={closeAll}/>
                  </div>
              : null}

             {showThursday ?
                <div className='flex flex-row flex-wrap ml-12'>
                  <ClassesThursday close={closeAll}/>
                </div>
              : null}

             {showFriday ?
                <div className='flex flex-row flex-wrap ml-12'>
                    <ClassesFriday close={closeAll}/>
                </div>
              : null}
        

    </div>
  )
}

export default Classes
