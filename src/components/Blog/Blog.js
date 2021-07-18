import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from "../sharedComponents/Header";
import Footer from "../sharedComponents/Footer";
import Bloghome from "./Bloghome";
import Blogcompose from "./Blogcompose";
import Blogabout from "./Blogabout";
import { Container, Box } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import CreateIcon from "@material-ui/icons/Create";
import InfoIcon from "@material-ui/icons/Info";
import LockOpenIcon from "@material-ui/icons/LockOpen";

const Blog = () => {
  return (
    <React.Fragment>
      <Box className="blogPage" component="div">
        <BrowserRouter>
          <Header
            classHeader={"classHeader"}
            pageLogo="Journal"
            first="Home"
            second="Compose"
            third="About"
            fourth="Log In"
            icon1={<HomeIcon fontSize="small" />}
            icon2={<CreateIcon fontSize="small" />}
            icon3={<InfoIcon fontSize="small" />}
            icon4={<LockOpenIcon fontSize="small" />}
            path1="/blog"
            path2="/blog/compose"
            path3="/blog/about"
            path4="/blog"
          />
          <Route path="/blog" exact component={Bloghome}></Route>
          <Route path="/blog/compose" exact component={Blogcompose} />
          <Route path="/blog/about" exact component={Blogabout} />
        </BrowserRouter>
      </Box>
      <Footer className={"blogFooter"} />
    </React.Fragment>
  );
};

export default Blog;
