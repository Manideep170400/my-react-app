import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import Card from "@mui/material/Card";
import serviceCaartImage from "../assets/supermarket-shopping-cart-concept-illustration_114360-17692.avif";
import { useCreateAccount } from "../store/redux";
import { obj } from "../store/redux";
function Home() {
  const [email, setEmail] = useState("john@gmail.com");
  const [password, setPassword] = useState("password");
  const store = useCreateAccount();

  return (
    <Card sx={{ maxWidth: 500 }} className="App">
      <div className="main_wrapper">
        <div>
          <img
            src={serviceCaartImage}
            alt="Supermarket"
            className="logo__wrapper"
          />
        </div>
        <div className="loginPage__wrapper">
          <div className="header__wrapper">
            <div>
              <TextField
                id="outlined-error"
                label="EMail"
                value={obj[0].login.Email}
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <TextField
                id="outlined-error"
                label="password"
                value={obj[0].login.password}
                defaultValue={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <Button variant="contained" onClick={store.loginPage}>
            login
          </Button>
          <Button
            variant="text"
            style={{ color: "white", borderBottom: "0.5px dotted black" }}
            onClick={store.forgetPassword}
          >
            Forget password
          </Button>
          <Button variant="contained" onClick={store.createAccount}>
            Create An Account
          </Button>
        </div>
      </div>
    </Card>
  );
}
export default Home;
