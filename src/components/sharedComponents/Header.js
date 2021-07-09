import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const useStyles = makeStyles(() => ({
  header: {
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  headerLink: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    fontSize: "23px",
    marginLeft: "50px",
  },
  menuDownButton: {
    display: "block",
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
  } = props;

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
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
      <Toolbar className={toolbar}>
        {pageLogo}
        <div>{getMenuButtons()}</div>
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
    <Typography variant="h4" component="h1" className={logo}>
      Journal
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
