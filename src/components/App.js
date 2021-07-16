import React from "react";

import {
  BrowserRouter,
  Route,
  Router,
  Switch,
  HashRouter,
} from "react-router-dom";
import Home from "./homeComponents/Home";
import Tribute from "./Tribute/Tribute";
import Landing from "./Landing/Landing";
import Survey from "./Survey/Survey";
import Technical from "./Technical/Technical";
import Blog from "./Blog/Blog";

import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: "#fefefe",
  //   },
  //   secondary: purple,
  // },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,

    fontSize: 20,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/REACT-Profile" exact component={Home} />
        <Route path="/REACT-Profile/blog" exact component={Blog} />
        <Route path="/REACT-Profile/Landing_Page" exact component={Landing} />
        <Route
          path="/REACT-Profile/Technical_Documentation"
          exact
          component={Technical}
        />
        <Route path="/REACT-Profile/Survey_Form" exact component={Survey} />
        <Route path="/REACT-Profile/Tribute_Page" exact component={Tribute} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
