import Members from "../models/members.js";

export const addNewUser = async (req, res) => { 

    const {name, telephone, dni, gender, startDate, adress, dueDate, membership, medicalRestrictions} = req.body
    console.log(req.body)

        const newUserToBeSaved = new Members ({ 
            name: name,
            telephone: telephone,
            dni: dni,
            gender: gender,
            dischargeDate: startDate,
            dueDate: dueDate,
            adress: adress,
            lastPay: startDate,
            membership: membership,
            medicalRestrictions: medicalRestrictions
        })
        await newUserToBeSaved.save()
                     .then((correct) => { 
                         res.json({message: "User has been Saved Correctly", correct})
                     })
                     .catch((err) => { 
                        console.log(err)
                     })
}