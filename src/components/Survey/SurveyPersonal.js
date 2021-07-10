import React from "react";
import { Card, TextField } from "@material-ui/core";

const SurveyPersonal = () => {
  return (
    <Card>
      <TextField
        id="standard-full-width"
        label="Full Name"
        style={{ margin: 8 }}
        placeholder="Enter first and last name"
        helperText=""
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="standard-full-width"
        label="Email"
        style={{ margin: 8 }}
        placeholder="Enter email address"
        helperText=""
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        id="standard-full-width"
        label="Age"
        style={{ margin: 8 }}
        placeholder="Enter your age"
        type="number"
        helperText=""
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        id="standard-full-width"
        label="Date of birth"
        style={{ margin: 8 }}
        placeholder="Enter your date of birth"
        type="date"
        helperText=""
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        id="standard-full-width"
        label="Phone number"
        style={{ margin: 8 }}
        placeholder="Enter your phone number"
        type="number"
        helperText=""
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Card>
  );
};

export default SurveyPersonal;
