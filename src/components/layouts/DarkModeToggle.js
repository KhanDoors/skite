import React from "react";
import Container from "@material-ui/core/Container";
import { Switch } from "@material-ui/core";

const DarkModeToggle = ({ darkMode, modeHandler }) => {
  return (
    <Container style={{ textAlign: "center" }}>
      <span role="img" aria-label="exercise">
        🌞
      </span>
      <Switch variant="contained" checked={darkMode} onChange={modeHandler} />
      <span role="img" aria-label="exercise">
        🧛‍♂️
      </span>
    </Container>
  );
};

export default DarkModeToggle;
