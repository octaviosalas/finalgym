import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Gym Plan
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} mt={2} >
          <Typography>Start Date</Typography>
          <TextField type='date'  required id="startDate" placeholder='Date'  fullWidth  autoComplete="cc-name"   variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6} mt={2}>
        <Typography>Due Date</Typography>
          <TextField required  type='date' id="cardNumber"  fullWidth autoComplete="cc-number"  variant="standard" />
        </Grid>
        <Grid item xs={12} md={6} mt={2}>
        <Typography>Membership</Typography>
          <select required  id="expDate"  fullWidth autoComplete="cc-exp" variant="standard" />
        </Grid>
        <Grid item xs={12} md={6} mt={2}>
        <Typography>Medical Restrictions</Typography>
        <input type="checkbox" className="checkbox m-2" />
        <input type="checkbox" className="checkbox m-2" />
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}