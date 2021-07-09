import React from "react";
import { Container, Typography } from "@material-ui/core";

const Footer = () => {
  const date = new Date();
  const copyRight = ` © Ibsa Ejeta ${date.toString().slice(10, 15)}`;

  return (
    <Container>
      <Typography variant="h5" align="center" gutterBottom>
        {copyRight}
      </Typography>
    </Container>
  );
};

export default Footer;
