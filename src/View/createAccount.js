import Card from "@mui/material/Card";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { obj } from "../store/redux";

function createAccount() {
  return (
    <Card sx={{ maxWidth: 500 }} className="App">
      <TextField
        id="outlined-basic"
        label="Email"
        value={obj[0].create.Email}
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="password"
        value={obj[0].create.password}
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="confirm password"
        value={obj[0].create.confirmPassword}
        variant="outlined"
      />
      <div className="signUP__wrapper">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="contained">Cancel</Button>
        </Link>
        <Link to="/empData" style={{ textDecoration: "none" }}>
          <Button variant="contained">signUp</Button>
        </Link>
      </div>
    </Card>
  );
}

export default createAccount;
