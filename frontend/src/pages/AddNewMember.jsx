import React from 'react'
import addUser from "../icons/addUser.png"
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const AddNewMember = () => {
     
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [dni, setDni] = useState("")
    const [telephone, setTelephone] = useState("")
    const [gender, setGender] = useState("")
    const [adress, setAdress] = useState("")
    const [startDate, setStartDate] = useState("")
    const [expirationDate, setExpirationDate] = useState("")
    const [membership, setMembership] = useState("")
    const [medicalRestrictions, setMedicalRestrictions] = useState("")
    const [backendMessage, setBackendMessage] = useState("")
    const [showBackendMessage, setShowBackendMessage] = useState(true)
    const [showFirstForm, setShowFirstForm] = useState(true)

    const navigate = useNavigate()

    const cleanForm = () => { 
        setName("")
        setEmail("")
        setDni("")
        setTelephone("")
        setGender("")
        setAdress("")
        setStartDate("")
        setExpirationDate("")
        setMembership("")
        setMedicalRestrictions("")
        setShowFirstForm(true)
    }

    const saveNewUser = () => { 
        const userData = ( { 
            name: name, 
            telephone: telephone,
            dni: dni,
            gender: gender,
            email: email,
            startDate: startDate,
            adress: adress,
            dueDate: expirationDate,
            membership: membership,
            medicalRestrictions: medicalRestrictions
        })
        axios.post("http://localhost:4000/addNewMember", userData)
             .then((res) => { 
                console.log(res.data.message)
                setBackendMessage(res.data.message)
                setShowBackendMessage(false)
                setTimeout(() => { 
                   navigate("/main")
                }, 1500)
             })
             .catch((err) => { 
                console.log(err)
             })
    }
  


  return ( 
            <div className='mt-0'>
                <div class="border border-s-8 border-y-8 rounded-xl flex 2xl:w-[600px] xl:w-[580px] lg:w-[500px] md:w-[500px] sm:w-[450px] xxs:2-[300px] xxxs:w-[290px] min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img class="mx-auto h-20 w-auto" src={addUser} alt="Your Company"/>
                        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Add New User</h2>
                    </div>


      {showFirstForm ?  
          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  
                        <div>
                            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                            <div class="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1
                            ring-inset text-center ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                        </div>

                        <div>
                            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                            <div class="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1
                            ring-inset ring-gray-300 text-center placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                        </div>

                        <div>
                            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Dni</label>
                            <div class="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1
                            ring-inset ring-gray-300 text-center placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" value={dni} onChange={(e) => setDni(e.target.value)}/>
                            </div>
                        </div>

                        <div>
                            <div class=" items-center justify-between">
                            <label for="password" class="block text-sm font-medium  leading-6 text-gray-900">Telephone</label>
                            </div>
                            <div class="mt-2">
                            <input id="password" name="password" type="text" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1
                            ring-inset ring-gray-300 text-center placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" value={telephone} onChange={(e) => setTelephone(e.target.value)}/>
                            </div>
                        </div>

                        <div>
                            <div class=" items-center justify-between">
                            <label for="password" class="block text-sm font-medium  leading-6 text-gray-900">Gender</label>
                            </div>
                            <div class="mt-2">
                            <select id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1
                            ring-inset ring-gray-300 text-center placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" value={gender} onChange={(e) => setGender(e.target.value)}>
                                <option>Maculino</option>
                                <option>Femenino</option>
                            </select>
                        
                            </div>
                        </div>


                        <div>
                            <button type="submit" class="flex w-full mt-6 justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline
                            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" onClick={() => setShowFirstForm(false)}>Next</button>
                        </div>
              
                <p class="mt-10 text-center text-sm text-gray-500">
                   <a href="#" class="font-semibold leading-6 text-blue-500 hover:text-blue-600" onClick={() => cleanForm()}>Clean</a>
               </p>
         </div>
        
        : 
        
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      
          <div>
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Adress</label>
              <div class="mt-2">
              <input id="email" name="adress" type="text"  required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1
               ring-inset text-center ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" value={adress} onChange={(e) => setAdress(e.target.value)}/>
              </div>
          </div>

          <div>
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Start Date</label>
              <div class="mt-2">
              <input id="email" name="email" type="date" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1
               ring-inset ring-gray-300 text-center placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
              </div>
          </div>

          <div>
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Expiration Date</label>
              <div class="mt-2">
              <input id="email" name="email" type="date" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1
               ring-inset ring-gray-300 text-center placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)}/>
              </div>
          </div>

          <div>
              <div class=" items-center justify-between">
                <label for="password" class="block text-sm font-medium  leading-6 text-gray-900">Membership</label>
              </div>
              <div class="mt-2">
              <select id="password" name="password" type="text" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1
               ring-inset ring-gray-300 text-center placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" value={membership} onChange={(e) => setMembership(e.target.value)}>
                <option>Free Gym</option>
                <option>Crossfit</option>
                <option>Functional</option>
                <option>All Activities</option>
                <option>Activitie + Free Gym</option>
               </select>
              </div>
          </div>

          <div>
              <div class=" items-center justify-between">
                <label for="password" class="block text-sm font-medium  leading-6 text-gray-900">Medical Restrictions</label>
              </div>
              <div class="mt-2">
              <textarea id="password" name="password" type="text" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1
               ring-inset ring-gray-300 text-center placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" value={medicalRestrictions} onChange={(e) => setMedicalRestrictions(e.target.value)}/>
             
              </div>
          </div>


          <div>
              <button  class="flex w-full justify-center mt-6 rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline
               focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" onClick={() => saveNewUser()}>Confirm</button>
          </div>
  

         {showBackendMessage ? <p class="mt-10 text-center text-sm text-gray-500">
          <a href="#" class="font-semibold leading-6 text-blue-500 hover:text-blue-600" onClick={() => cleanForm()}>Clean</a>
          </p> : <p className='text-blue-500 mt-4'><b>{backendMessage}</b></p>}
  </div>}
        </div>
            </div>
  )
}

export default AddNewMember
