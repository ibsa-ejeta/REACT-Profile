import React from "react";
import {
  Grid,
  Container,
  Typography,
  Card,
  makeStyles,
  Paper,
} from "@material-ui/core";
const useStyles = makeStyles(() => ({
  homeIntroduction: {
    paddingTop: "9rem",
    textAlign: "center",
    marginBottom: "15rem",
  },
}));
const Introduction = () => {
  const classes = useStyles();
  return (
    <Container id="Home" className={classes.homeIntroduction}>
      <Card raised="false">
        <Typography variant="h2">Ibsa Ejeta</Typography>
        <Typography variant="h4">a Web Developer</Typography>
        {/* <img
          src="https://lh3.googleusercontent.com/sIIU0wzotGRv5ME_C3OCOQm4-yRJAIpJ8x-kA-PDjiER_scUM013mI3GLxODVClTZidnusp64HOcxDaRUe4LBRY0iVj6D82YIaAaT2NSjCCUzpS5OtyCA8RZnc2WFtA0lODF59HN775dAVhB61-vB1pBItXpMJBHYPJlPrHIz4WBapADhFrJz7lcOMLMe4d_0LgTyzFuLxsuvbKTjAeDrf4BPDAKdTJG7r9-wHAMIf5z8dyvxlPeHZVm7QAN50wcqndZ-U9mTAKPTOgjk8cC1yEvRYngUFUxFD50drsic5reqC1Sq8HMzpSP_vJSe1S-pHjcksGl-24UPfOxZT2aci3nQ30jwW5XvtZCAlL88p97thRJU0tYu_gsIIuDggw-EhaFdp9aKfIUyusQ0NV8j02DKZlv-KfARREG_jM0MrwesQ98zvO-kKbY3fIB6UsId8blZ1dEzPNqWKAWJz_ToLqyKKxrnbJniHExZa3zOPox84mxPxVhLUCdRlevpSXmxvLiUYUYyL3EI6AH1E6wusTMQ4JTEt3gesJOUaRV1bKrTME72Pq7tf8voQV0nVlKOcrva7GnNNZYv6NsANnxJcv4NxLHKYI6KNvV-4tKEcjvjogX-K6aFD_nm0h9Bh9fo0DZHPARDYO6iMhX3f_tg4H_5naLaDz8vBymQd3TiTmfl_eOSoXK6GFrFtFK5wv2IgPAfdB4dWWp3m_V_15XMmw5Cf4B7llYt-SwXbmw-UpwA0o=w155-h155-no"
          alt="Ibsa Ejeta "
        /> */}
        <Typography variant="h4" component="h4">
          I'm a creative full stack web developer, with Network Engineering
          background, dedicated to building and optimizing the performance of
          user-centric, high-impact websites.
        </Typography>
      </Card>
    </Container>
  );
};

export default Introduction;
