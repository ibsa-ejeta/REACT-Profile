import React from "react";
import {
  Container,
  Typography,
  makeStyles,
  Button,
  Drawer,
  Paper,
  MenuList,
  MenuItem,
  ClickAwayListener,
  Grow,
} from "@material-ui/core";

const TechnicalTable = () => {
  return (
    <Paper>
      <MenuList>
        <MenuItem href="#Introduction">Introduction</MenuItem>
        <MenuItem href="#What_you_should_already_know">
          What You Should Already Know
        </MenuItem>
        <MenuItem href="#JavaScript_and_Java">JavaScript and Java</MenuItem>
        <MenuItem href="#Hello_world">Hello World</MenuItem>
        <MenuItem href="#Variables">Variables</MenuItem>
        <MenuItem href="#Declaring_variables">Declaring Variables</MenuItem>
        <MenuItem href="#Variable_scope">Variable Scope</MenuItem>
        <MenuItem href="#Global_variables">Global Variables</MenuItem>
        <MenuItem href="#Constants">Local Variables</MenuItem>
        <MenuItem href="#Data_types">Data Types</MenuItem>
        <MenuItem href="#if...else_statement">if...else Statement</MenuItem>
        <MenuItem href="#While_statement">while Statement</MenuItem>
        <MenuItem href="#Function_declarations">Function Declarations</MenuItem>
        <MenuItem href="#Reference">Reference</MenuItem>
      </MenuList>
    </Paper>
  );
};

export default TechnicalTable;
