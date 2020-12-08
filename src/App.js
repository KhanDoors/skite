import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import theme from "./theme";
import { AnimatePresence } from "framer-motion";
import DarkModeToggle from "./components/layouts/DarkModeToggle";
import { Grid } from "@material-ui/core";
import Breadcrumb from "./components/layouts/Breadcrumb";

const App = () => {
  const [darkMode, setDarkMode] = useState(getInitialMode);

  const first = "#131A40";
  const second = "#355B8C";
  const third = "#081826";
  const fourth = "#17AEBF";
  const fifth = "#30F2F2";
  const sixth = "#D9042B";

  const theme = createMuiTheme({
    palette: {
      common: {
        primary: first,
        secondary: second,
        error: sixth,
      },
      primary: {
        main: first,
      },
      secondary: {
        main: fourth,
      },
      error: {
        main: third,
      },
      warning: {
        main: sixth,
      },
      info: {
        main: fifth,
      },
      success: {
        main: fourth,
      },
      type: darkMode ? "dark" : "light",
    },
  });

  const changeDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem("theme"));
    return savedMode || false;
  }

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Grid container>
        <Grid item xs={8}>
          <Breadcrumb />
        </Grid>
        <Grid item xs={4}>
          <DarkModeToggle darkMode={darkMode} modeHandler={changeDarkMode} />
        </Grid>
      </Grid>
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </AnimatePresence>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
