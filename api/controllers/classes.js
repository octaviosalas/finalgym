import Classes from "../models/classes.js";
import Memberships from "../models/memberships.js";


export const getAllClasses = async (req, res) => {
   
  Classes.find()
         .then((c) => { 
          res.send(c)
         })
         .catch(() => { 
          console.log(err)
         })
 
};
 
