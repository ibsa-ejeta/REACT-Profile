import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
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
        <Route path="/" exact component={Home} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/Landing_Page" exact component={Landing} />
        <Route path="/Technical_Documentation" exact component={Technical} />
        <Route path="/Survey_Form" exact component={Survey} />
        <Route path="/Tribute_Page" exact component={Tribute} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
