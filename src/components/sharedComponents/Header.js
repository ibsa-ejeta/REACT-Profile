import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  Avatar,
  IconButton,
  Drawer,
  MenuItem,
  Box,
  Grid,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const useStyles = makeStyles(() => ({
  header: {
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 1200px)": {
      paddingLeft: 0,
    },
  },

  headerLink: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 400,
    fontSize: "20px",
    marginLeft: "50px",
    textDecoration: "none",
    color: "#fff",
    "&:hover": {
      color: "grey",
      textDecoration: "none",
    },
  },
  menuDownButton: {
    display: "block",
    color: "#000",
    textDecoration: "none",
    fontSize: "20px",
    marginBottom: "1.5rem",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

const Header = (props) => {
  const { header, logo, headerLink, menuDownButton, toolbar, drawerContainer } =
    useStyles();
  const {
    pageLogo,
    first,
    second,
    third,
    fourth,
    icon1,
    icon2,
    icon3,
    icon4,
    path1,
    path2,
    path3,
    path4,
    imgAlt,
    imgSrc,
  } = props;

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1200
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className="toolbar">
        <Grid container>
          <Grid
            item
            container
            direction="row"
            justifyContent="flex-start"
            sm={4}
          >
            <Avatar alt={imgAlt} src={imgSrc} />
            &nbsp;&nbsp;
            <Typography variant="h5" align="center">
              {pageLogo}
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justifyContent="flex-end"
            sm={8}
            alignContent="center"
          >
            {getMenuButtons()}
          </Grid>
        </Grid>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{headerLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return (
      <>
        <Link to={path1} className={menuDownButton}>
          {first}
        </Link>
        <Link to={path2} className={menuDownButton}>
          {second}
        </Link>
        <Link to={path3} className={menuDownButton}>
          {third}
        </Link>
        <Link to={path4} className={menuDownButton}>
          {fourth}
        </Link>
      </>
    );
  };

  const headerLogo = (
    <Typography variant="h5" component="h5">
      {pageLogo}
    </Typography>
  );

  const getMenuButtons = () => {
    return (
      <>
        <Link to={path1} className={headerLink}>
          {icon1}&nbsp;&nbsp;
          {first}
        </Link>
        <Link to={path2} className={headerLink}>
          {icon2}&nbsp;&nbsp;
          {second}
        </Link>
        <Link to={path3} className={headerLink}>
          {icon3}&nbsp;&nbsp;
          {third}
        </Link>
        <Link to={path4} className={headerLink}>
          {icon4}&nbsp;&nbsp;
          {fourth}
        </Link>
      </>
    );
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
};

export default Header;
