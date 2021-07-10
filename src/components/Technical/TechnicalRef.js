import React from "react";
import {
  Container,
  Box,
  Card,
  Typography,
  makeStyles,
  Button,
  List,
  ListItem,
  Paper,
  MenuList,
  MenuItem,
  ClickAwayListener,
  Grow,
} from "@material-ui/core";

const TechnicalRef = () => {
  return (
    <Box>
      <Card>
        <Typography variant="h4">Reference</Typography>
        <List>
          <ListItem>
            All the documentation in this page is taken from
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
              target="_blank"
              rel="noreferrer"
            >
              &nbsp;MDN
            </a>
          </ListItem>
        </List>
      </Card>
    </Box>
  );
};

export default TechnicalRef;
