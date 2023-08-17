import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import axios from "axios"




const AddNewMember = () => {

  const [name, setName] = useState("")
  const [telephone, setTelephone] = useState("")
  const [dni, setDni] = useState("")
  const [gender, setGender] = useState("")
  const [startDate, setStartDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [membership, setMembership] = useState("")
  const [adress, setAdress] = useState("")
  const [medicalRestrictions, setMedicalRestrictions] = useState("")
  const [hasMedicalRestrictions, setHasMedicalRestrictions] = useState(false)

  const addNewUser = () => { 
    const newUserData = ({
      name: name,
      telephone: telephone,
      dni: dni,
      gender: gender,
      adress: adress,
      startDate: startDate,
      dueDate: dueDate,
      membership: membership,
      medicalRestrictions: medicalRestrictions,
    }) 
    axios.post("http://localhost:4000/addNewMember", newUserData)
         .then((res) => { 
          console.log(res.data)
         })
         .catch((err) => { 
          console.log(err)
         })
  }


function AddressForm() {
  return (
    <React.Fragment>
            <Typography variant="h6" gutterBottom>
              Personal Information
            </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <TextField required id="lastName" name="lastName" label="Complete Name" fullWidth autoComplete="family-name" variant="standard" onChange={(e) => setName(e.target.value)}/>
            </Grid>

            <Grid item xs={12}>
              <TextField required type='number' id="telephone"   name="telephone" label="Telephone" fullWidth autoComplete="shipping address-line1" variant="standard" onChange={(e) => setTelephone(e.target.value)}/>
            </Grid>

            <Grid item xs={12}>
              <TextField id="dni" type='number' name="dni" label="DNI" fullWidth autoComplete="shipping address-line2" variant="standard" onChange={(e) => setDni(e.target.value)}/>
            </Grid>

            <Grid item xs={12}>
              <TextField id="adress" type='text' name="adress" label="adress" fullWidth autoComplete="shipping address-line2" variant="standard" onChange={(e) => setAdress(e.target.value)}/>
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField required type='select'  id="gender" name="gender" label="Gender" fullWidth autoComplete="shipping address-level2"  variant="standard" onChange={(e) => setGender(e.target.value)}/>
            </Grid>
        </Grid>
    </React.Fragment>
  );
}

function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Gym Plan
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} mt={2} >
          <Typography>Start Date</Typography>
          <TextField type='date'  required id="startDate" placeholder='Date'  fullWidth  autoComplete="cc-name"   variant="standard" onChange={(e) => setStartDate(e.target.value)}/>
        </Grid>
        <Grid item xs={12} md={6} mt={2}>
        <Typography>Due Date</Typography>
          <TextField required  type='date' id="cardNumber"  fullWidth autoComplete="cc-number"  variant="standard" onChange={(e) => setDueDate(e.target.value)}/>
        </Grid>
        <Grid item xs={12} md={6} mt={2}>
        <Typography>Membership</Typography>
          <select required  id="expDate"  fullWidth autoComplete="cc-exp" variant="standard" onChange={(e) => setMembership(e.target.value)}>
              <option></option> 
              <option>a</option> 
              <option>b</option> 
              <option>c</option> 
              <option>d</option> 
          </select>
        </Grid>
        <Grid item xs={12} md={6} mt={2}>
          <Typography>Medical Restrictions</Typography>
           <input type="checkbox" className="checkbox m-2"  checked={hasMedicalRestrictions}  onChange={() => setHasMedicalRestrictions(!hasMedicalRestrictions) && setMedicalRestrictions("No")}/>
        </Grid>

        {hasMedicalRestrictions ?  
          <Grid item xs={12} md={16} mt={2}>
            <textarea onChange={((e) => setMedicalRestrictions(e.target.value))} className="border border-t-blue-600 text-center w-full" placeholder='Describe Restrictions'></textarea> 
          </Grid>
           : null}
        
      </Grid>
    </React.Fragment>
  );
}



const steps = ['Personal information', 'Gym Plan'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return AddressForm();
    case 1:
      return PaymentForm();
    
    default:
      throw new Error('Unknown step');
  }
}

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    addNewUser()
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };



  return (
      <React.Fragment>
      <CssBaseline />
    
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">  New User </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (  <Step key={label}>  <StepLabel>{label}</StepLabel>  </Step>   ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>  User Created Successfully </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment >
              {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  {activeStep !== 0 && (  <Button onClick={handleBack} sx={{ mt: 3, ml: 4 }}>   Cancel  </Button> )}
                  <Button  variant="contained"     onClick={handleNext}     sx={{ mt: 3, ml: 4 }} > {activeStep === steps.length - 1 ? 'Confirm and Save' : 'Next'}  </Button>
                </Box>
            </React.Fragment>
          )}
        </Paper>
        <p className='cursor-pointer'><b>Go Main</b></p>
      </Container>
    </React.Fragment>
  )
}

export default AddNewMember

