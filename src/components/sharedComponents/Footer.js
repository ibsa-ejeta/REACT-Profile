import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  footer: {
    bottom: 0,

    height: "4rem",
    left: 0,
    width: "100%",
    backgroundColor: "aqua",
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  const date = new Date();
  const copyRight = ` © Ibsa Ejeta ${date.toString().slice(10, 15)}`;

  return (
    <Box className={`${props.className}`}>
      <Typography variant="h5" align="center" gutterBottom>
        {copyRight}
      </Typography>
    </Box>
  );
};

export default Footer;
