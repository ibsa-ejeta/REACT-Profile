import { Link, BrowserRouter } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Card,
  Grid,
  Typography,
  CardMedia,
  CardActions,
  Paper,
} from "@material-ui/core";

import Button from "@material-ui/core/Button";

import LanguageIcon from "@material-ui/icons/Language";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: "3rem",
    marginTop: "3rem",
    marginBottom: "3rem",
  },

  img: {
    width: "20em",
    height: "30em",
    margin: 12,
    minHeight: "60vh",
    marginRight: "auto",
    marginLeft: "auto",
    borderRadius: 2,
  },
  projectCard: {
    margin: "3rem",
    textAlign: "center",
    alignItems: "center",
  },
  projectButton: {
    // justifyContent: "center",
    // marginLeft: "10rem",
    // marginRight: "2rem",
    marginLeft: "auto",
  },
}));

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const Projects = (props) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const { titles, projectDescription, images, sites, urls, alts, keys } = props;
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const textGrid = (
    <Grid item xs={12} md={8}>
      <Card className={classes.projectCard}>
        <Typography component="h3" variant="h3" gutterBottom>
          {titles}
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          {projectDescription}
        </Typography>

        <CardActions className={classes.projectButton}>
          <Button
            href={sites}
            target="_blank"
            rel="noopener noreferrer"
            type="Link"
            variant="contained"
            color="primary"
          >
            <LanguageIcon fontSize="large" />
            &nbsp;&nbsp;&nbsp;Visit Site
          </Button>

          <Button
            href={urls}
            target="_blank"
            rel="noreferrer"
            variant="contained"
            color="primary"
          >
            <GitHubIcon fontSize="large" />
            &nbsp;&nbsp;&nbsp;GitHub-Repo
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
  const imageGrid = (
    <Grid
      item
      xs={12}
      md={4}
      alignContent="center"
      justify="center"
      spacing={2}
    >
      <CardMedia className={classes.img} image={images} title={titles} />
    </Grid>
  );
  if (keys % 2 === 0 && windowDimensions.width > 960) {
    return (
      <Paper elevation={3} className={classes.paper}>
        <Grid
          container
          alignItems="center"
          alignContent="center"
          direction="row"
          md={12}
          spacing={3}
        >
          {imageGrid} {textGrid}
        </Grid>
      </Paper>
    );
  }

  return (
    <Paper elevation={5} className={classes.paper}>
      <Grid
        container
        alignItems="center"
        alignContent="center"
        direction="row"
        md={12}
        spacing={3}
      >
        {textGrid} {imageGrid}
      </Grid>
    </Paper>
  );
};

export default Projects;

//<ImageListItem className={classes.cover}>
//<img src={images} alt={alts} />
//</ImageListItem>
