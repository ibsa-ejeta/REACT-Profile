import React from "react";
import {
  Card,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@material-ui/core";

const SurveyNext = () => {
  return (
    <Card>
      <FormControl component="fieldset">
        <FormLabel component="legend">
          Which option best describes your current role?
        </FormLabel>
        <RadioGroup
          defaultValue="student"
          aria-label="gender"
          name="customized-radios"
        >
          <FormControlLabel
            value="student"
            control={<Radio />}
            label="Student"
          />
          <FormControlLabel
            value="full-time"
            control={<Radio />}
            label="Full-time"
          />
          <FormControlLabel
            value="part-time"
            control={<Radio />}
            label="Part-time"
          />
          <FormControlLabel
            value="unemployed"
            control={<Radio />}
            label="Unemployed"
          />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
    </Card>
  );
};

export default SurveyNext;
