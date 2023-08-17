import Members from "../models/members.js";

export const addNewUser = async (req, res) => { 

    const {name, telephone, dni, gender, email, startDate, adress, dueDate, membership, medicalRestrictions} = req.body
    console.log(req.body)

    await Members.findOne({email})
                 .then((member) => { 
                    if(member) { 
                        res.json({message: "The member is already Registered"})
                    } else if(!name|| !telephone || !dni || !gender ||!email || !startDate || !adress || !dueDate || !membership) { 
                        res.json({message: "Data is missing to be able to save Member. Please complete all fields"})
                    } else { 
                        const newMember = new Members ({
                            name: name,
                            telephone: telephone,
                            dni: dni,
                            gender: gender,
                            dischargeDate: startDate,
                            dueDate: dueDate,
                            adress: adress,
                            email: email,
                            lastPay: startDate,
                            membership: membership,
                            medicalRestrictions: medicalRestrictions
                        })
                        newMember.save()
                                 .then((member) => { 
                                    res.json({message: "The member was saved Correctly", member})
                                 })
                                 .catch((err) => { 
                                    console.log(err)
                                 })
                    }
                 })

        
}

export const getMemberByDni = async (req, res) => { 
    const dni = parseInt(req.params.dni);
    console.log("El DNI que llego es :" + dni)
  
    Members.find({
      $or: [
        { dni: dni }
      ]
    })
      .then((results) => {
        res.json(results);
      })
      .catch((err) => console.log(err));
}