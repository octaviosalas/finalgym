import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
       Personal Information
      </Typography>
      <Grid container spacing={3}>
      
        <Grid item xs={12} sm={12}>
          <TextField required id="lastName" name="lastName" label="Complete Name" fullWidth autoComplete="family-name" variant="standard"/>
        </Grid>

        <Grid item xs={12}>
          <TextField required type='number' id="telephone"   name="telephone" label="Telephone" fullWidth autoComplete="shipping address-line1" variant="standard" />
        </Grid>

        <Grid item xs={12}>
          <TextField id="dni" type='number' name="dni" label="DNI" fullWidth autoComplete="shipping address-line2" variant="standard" />
        </Grid>

        <Grid item xs={12} sm={12}>
          <TextField required type='select'  id="gender" name="gender" label="Gender" fullWidth autoComplete="shipping address-level2"  variant="standard" />
        </Grid>
      
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Confirm Data"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}