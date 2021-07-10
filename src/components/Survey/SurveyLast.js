import React, { useState } from "react";
import {
  Card,
  Box,
  Typography,
  FormGroup,
  FormLabel,
  TextField,
  Button,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

const SurveyLast = () => {
  const [value, setValue] = useState(0);
  return (
    <Card className="sub-section">
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Over all rating</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>

      <FormGroup>
        <FormLabel component="legend">Any comments or suggestions?</FormLabel>
        <TextField
          id="filled-multiline-flexible"
          multiline
          maxRows={8}
          variant="filled"
        />

        <Button type="submit" id="submit">
          Submit
        </Button>
      </FormGroup>
    </Card>
  );
};

export default SurveyLast;
