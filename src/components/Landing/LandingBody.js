import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Card,
  Grid,
  Container,
  Typography,
  CardMedia,
  CardActions,
  Paper,
} from "@material-ui/core";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import HighQualityIcon from "@material-ui/icons/HighQuality";

const LandingBody = () => {
  return (
    <Card>
      <Card>
        <Typography>Handcrafted, home-made masterpieces</Typography>

        {/* <img
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/237/fire_1f525.png"
          alt=""
          className="feature-img"
        /> */}
        <Typography>Premium Materials</Typography>
        <Typography>
          Our trombones use the shiniest brass which is sourced locally. This
          will increase the longevity of your purchase.
        </Typography>

        <Typography>
          <LocalShippingIcon fontSize="large" />
          &nbsp;&nbsp;Fast Shipping
        </Typography>
        <Typography>
          We make sure you recieve your trombone as soon as we have finished
          making it. We also provide free returns if you are not satisfied.
        </Typography>

        <Typography>
          <HighQualityIcon fontSize="large" /> &nbsp;&nbsp;Quality Assurance
        </Typography>
        <Typography>
          For every purchase you make, we will ensure there are no damages or
          faults and we will check and test the pitch of your instrument.
        </Typography>
      </Card>

      <Card className="video" id="video">
        <iframe
          src="https://www.youtube.com/embed/y8Yv4pnO7qc"
          title="trombone demo"
        ></iframe>
      </Card>

      <Card id="pricing" className="pricing-opt card-deck">
        <div className="card" id="price-option">
          <div className="card-body">
            <h4 className="card-title">TENOR TROMBONE</h4>
            <p className="card-text price">$600</p>
            <ul>
              <li className="card-text">Quick, sensitive response</li>
              <li className="card-text">2 interchangeable leadpipes</li>
              <li className="card-text">
                8" bell, Medium shank, Gold brass leadpipe
              </li>
              <li className="card-text">
                Drawn one-piece brass outer slide, Nickel-plated pistons
              </li>
            </ul>
            <button
              type="button"
              name="button"
              className="button btn btn-primary"
            >
              SELECT
            </button>
          </div>
        </div>

        <div className="price-option card">
          <div className="card-body">
            <h4 className="card-title">BASS TROMBONE</h4>
            <p className="card-text price">$900</p>
            <ul>
              <li className="card-text">
                Clear lacquer finish, Chrome-plated nickel silver inner slide
              </li>
              <li className="card-text">
                Yellow brass body and one piece yellow brass bell
              </li>
              <li className="card-text">
                Excellent student or professional instrument
              </li>
            </ul>
            <button
              type="button"
              name="button"
              className="button btn btn-primary"
            >
              SELECT
            </button>
          </div>
        </div>
        <div className="price-option card">
          <div className="card-body">
            <h4 className="card-title">VALVE TROMBONE</h4>
            <p className="card-text price">$1200</p>
            <ul>
              <li className="card-text">Plays similar to a Trumpet</li>
              <li className="card-text">Great for Jazz Bands</li>
              <li className="card-text">
                Tubular braces, Balancer, Pressure formed tubing
              </li>
              <li className="card-text">
                Pluzuma welded bell, Bracing guards, Medium 0.5" bore
              </li>
            </ul>
            <button
              type="button"
              name="button"
              className="button btn btn-primary"
            >
              SELECT
            </button>
          </div>
        </div>
      </Card>
    </Card>
  );
};

export default LandingBody;
