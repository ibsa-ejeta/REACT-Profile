import React from "react";
import {
  Button,
  Typography,
  Container,
  TextField,
  makeStyles,
  Card,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  blogCompose: {
    paddingTop: "9rem",
    textAlign: "center",
    marginBottom: "15rem",
  },
}));

const Blogcompose = () => {
  const classes = useStyles();
  return (
    <Container className={classes.blogCompose}>
      <Typography variant="h2">Compose</Typography>
      <form noValidate autoComplete="off" className="">
        <TextField
          id="filled-full-width"
          label="Title"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />

        <TextField
          id="filled-full-width"
          label="Post"
          fullWidth
          placeholder="Placeholder"
          multiline
          InputLabelProps={{
            shrink: true,
          }}
          rows={8}
          variant="outlined"
        />

        <Button type="submit" className="">
          Publish
        </Button>
      </form>
    </Container>
  );
};

export default Blogcompose;
