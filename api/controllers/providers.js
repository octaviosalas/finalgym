import Providers from "../models/providers.js";

export const addProviders = async (res, req) => { 
     
}

export const getAllProviders = async (req, res) => { 
    Providers.find()
             .then((exist) => { 
                res.send(exist)
             })
             .catch((err) => console.log(err))
}

export const getOneProvider = async (req, res) => { 
    const {providerChoosen} = req.params

     Providers.find({company: providerChoosen})
                   .then((exist) => { 
                    res.json(exist)
                   })
                   .catch((err) => { 
                    console.log(err)
                   })
}
