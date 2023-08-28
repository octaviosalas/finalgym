import React from 'react'
import axios from "axios"
import {useState, useEffect} from "react"
import StructureClasses from '../components/StructureClasses'


const ClassesThursday = ({close}) => {

    const [thursdayClasses, setThursdayClasses] = useState([])
    const [load, setLoad] = useState(true)

    useEffect(() => { 
        axios.get("http://localhost:4000/getAllClasses")
            .then((res) => { 
              const docs = res.data
              const classesOnThursday = docs.filter(d => d.day === "Thursday")
              setThursdayClasses(classesOnThursday)
              setTimeout(() =>{ 
                setLoad(false)
                console.log("fALSO")
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
                <>
                <div>
                     <button className='btn bg-blue-400 text-white hover:text-blue-400 hover:bg-black m-2' onClick={() => close()}>back</button>
                </div>
               <div className='flex flex-row flex-wrap ml-12'>
                   {thursdayClasses.map((c) => <StructureClasses monday={c}/>)} 
                </div>    
                </>
            
                }
    </div>
  )
}

export default ClassesThursday
