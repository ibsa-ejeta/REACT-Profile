import React from "react";
import {
  Card,
  Container,
  Typography,
  Paper,
  makeStyles,
  Stepper,
  Button,
  Step,
  StepButton,
} from "@material-ui/core";
import SurveyPersonal from "./SurveyPersonal";
import SurveyNext from "./SurveyNext";
import SurveyNext2 from "./SurveyNext2";
import SurveyLast from "./SurveyLast";
import Footer from "../sharedComponents/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: "inline-block",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Personal Information",
    "Current Role",
    "Suggest Improvement",
    "Rate and Submit",
  ];
}
function getStepContent(step) {
  switch (step) {
    case 0:
      return <SurveyPersonal />;
    case 1:
      return <SurveyNext />;
    case 2:
      return <SurveyNext2 />;
    case 3:
      return <SurveyLast />;
    default:
      return "Unknown step";
  }
}

const Survey = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Container>
      <Card>
        <Typography variant="h2" id="title">
          Survey Form
        </Typography>
        <Typography id="description">
          Thank you for taking your time to help improve the portfolio page.
        </Typography>
      </Card>

      <form
        className="form-fill"
        action="/Survey_Form"
        method="POST"
        id="survey-form"
      >
        <div className={classes.root}>
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepButton
                  onClick={handleStep(index)}
                  completed={completed[index]}
                >
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <div>
            {allStepsCompleted() ? (
              <div>
                <Typography>
                  All steps completed - you&apos;re finished
                </Typography>
                <Button onClick={handleReset}>Reset</Button>
              </div>
            ) : (
              <div>
                <Typography className={classes.instructions}>
                  {getStepContent(activeStep)}
                </Typography>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    Next
                  </Button>
                  {/* {activeStep !== steps.length &&
                    (completed[activeStep] ? (
                      <Typography
                        variant="caption"
                        className={classes.completed}
                      >
                        Step {activeStep + 1} already completed
                      </Typography>
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleComplete}
                      >
                        {completedSteps() === totalSteps() - 1
                          ? "Finish"
                          : "Submit"}
                      </Button>
                    ))} */}
                </div>
              </div>
            )}
          </div>
        </div>
        {/* <SurveyPersonal />
        <SurveyNext />
        <SurveyNext2 />
        <SurveyLast /> */}
      </form>
      <Card>
        <Typography variant="h5" className="weatherAdd">
          The temperature in Toronto on today is temperature degree centigrade!
        </Typography>
      </Card>
      <Footer />
    </Container>
  );
};

export default Survey;
