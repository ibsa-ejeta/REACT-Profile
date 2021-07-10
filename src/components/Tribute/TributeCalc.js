import React from "react";
import {
  Grid,
  Container,
  Paper,
  Button,
  Typography,
  TextField,
  List,
  ListItem,
  makeStyles,
} from "@material-ui/core";

const TributeCalc = () => {
  return (
    <Paper>
      <form>
        <Typography>Millwatts to dBm Converter </Typography>
        <TextField
          id="standard-number"
          label="Power in mW"
          type="number"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Button>Calculate</Button>
      </form>

      <TextField
        id="standard-number"
        label="Power in dBm"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Paper>
  );
};

export default TributeCalc;
