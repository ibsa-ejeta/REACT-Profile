import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from "../sharedComponents/Header";
import Footer from "../sharedComponents/Footer";
import Bloghome from "./Bloghome";
import Blogcompose from "./Blogcompose";
import Blogabout from "./Blogabout";
import "./Blogstyles.css";
import { Grid, Container, Typography, makeStyles } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import CreateIcon from "@material-ui/icons/Create";
import InfoIcon from "@material-ui/icons/Info";
import LockOpenIcon from "@material-ui/icons/LockOpen";
const Blog = () => {
  return (
    <div>
      <BrowserRouter>
        <Header
          pageLogo="Journal"
          first="Home"
          second="Compose"
          third="About"
          fourth="Log In"
          icon1={<HomeIcon fontSize="large" />}
          icon2={<CreateIcon fontSize="large" />}
          icon3={<InfoIcon fontSize="large" />}
          icon4={<LockOpenIcon fontSize="large" />}
          path1="/blog"
          path2="/blog/compose"
          path3="/blog/about"
          path4="/blog"
        />
        <Route path="/blog" exact component={Bloghome}></Route>
        <Route path="/blog/compose" exact component={Blogcompose} />
        <Route path="/blog/about" exact component={Blogabout} />

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Blog;
