import React from "react";
import Header from "../sharedComponents/Header";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Contactinfo from "./Contactinfo";
import Footer from "../sharedComponents/Footer";
import "./Styles.css";
import { Grid, Container, Paper, makeStyles } from "@material-ui/core";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import HomeIcon from "@material-ui/icons/Home";
import ContactMailIcon from "@material-ui/icons/ContactMail";

const details = require("./details.json");

const useStyles = makeStyles(() => ({}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Header
        pageLogo="Ibsa Portfolio"
        first="Home"
        second="Projects"
        third="Contact"
        icon1={<HomeIcon fontSize="large" />}
        icon2={<AccountTreeIcon fontSize="large" />}
        icon3={<ContactMailIcon fontSize="large" />}
        path1="#"
        path2="#projects"
        path3="#contact"
      />
      <Introduction />
      <Container id="projects" className={classes.container}>
        {details.map((detail) => (
          <Projects
            keys={detail.key}
            titles={detail.titles}
            projectDescription={detail.projectDescription}
            images={detail.images}
            sites={detail.sites}
            urls={detail.urls}
            alts={detail.alts}
          ></Projects>
        ))}
      </Container>
      <Contactinfo />

      <Footer />
    </div>
  );
};

export default Home;
