import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import StructureOneMemberData from './StructureOneMemberData'


const OneMemberData = () => {

    const params = useParams()
    const {dni} = params
    const [userData, setUserData] = useState([])
    const [load, setLoad] = useState(true)
    const [NoUserFinded, setNoUserFinded] = useState(false)

   useEffect(() => { 
    axios.get(`http://localhost:4000/getMemberByDni/${dni}`)
         .then((res) => { 
            console.log(res.data)
            if(res.data.length === 0) { 
                   setTimeout(() => { 
                    setLoad(false)
                    setNoUserFinded(true)
                   }, 1500)
            } else { 
              setUserData(res.data)
              setTimeout(() => { 
              setLoad(false)
             }, 1500)
            }
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
         <StructureOneMemberData user={userData}/>}
         {NoUserFinded ? <p className='text-blue-500 text-xl'><b>No user Finded</b></p> : null}
       
    </div>
  )
}

export default OneMemberData
