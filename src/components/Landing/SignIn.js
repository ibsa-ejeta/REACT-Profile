import React from "react";
import { Card, Container, Paper, makeStyles } from "@material-ui/core";
const SignIn = () => {
  return (
    <Card className="form-signin">
      <form action="/Landing_Page" method="POST">
        <h1 className="h3 mb-3 font-weight-normal form-h1">
          Sign up for our newsletter!
        </h1>
        <label for="fName" className="sr-only top">
          First Name
        </label>
        <input
          id="fName"
          type="text"
          name="fName"
          className="form-control top"
          placeholder="First Name"
          required
        />
        <label for="lName" className="sr-only middle">
          Last Name
        </label>
        <input
          id="lName"
          type="text"
          name="lName"
          className="form-control middle"
          placeholder="Last Name"
          required
        />
        <label for="email" className="sr-only form-email bottom">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="form-control bottom"
          placeholder="Email"
          required
        />
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign Up
        </button>
      </form>
    </Card>
  );
};

export default SignIn;
