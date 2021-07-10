import React, { useState } from "react";
import {
  Card,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@material-ui/core";

const SurveyNext2 = () => {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true,
    checkedE: true,
    checkedF: true,
    checkedG: true,
    checkedH: true,
    checkedI: true,
    checkedJ: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <Card>
      <FormGroup>
        <FormLabel component="legend">
          What would you like to see improved? (Check all that apply)
        </FormLabel>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
            />
          }
          label="Front-end Styling"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
            />
          }
          label="Back-end Operations"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedC}
              onChange={handleChange}
              name="checkedC"
            />
          }
          label="Website Speed"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedD}
              onChange={handleChange}
              name="checkedD"
            />
          }
          label=" Add Front End Libraries"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedE}
              onChange={handleChange}
              name="checkedE"
            />
          }
          label=" Responsiveness"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedF}
              onChange={handleChange}
              name="checkedF"
            />
          }
          label="Add Animation"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedG}
              onChange={handleChange}
              name="checkedG"
            />
          }
          label="More Projects"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedH}
              onChange={handleChange}
              name="checkedH"
            />
          }
          label="Web Content Accessibility"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedI}
              onChange={handleChange}
              name="checkedI"
            />
          }
          label="Improve UI Design"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedJ}
              onChange={handleChange}
              name="checkedJ"
            />
          }
          label="Improve Typography"
        />
      </FormGroup>
    </Card>
  );
};
export default SurveyNext2;
