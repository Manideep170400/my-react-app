import Card from "@mui/material/Card";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { obj } from "../store/redux";

function forgetPassword() {
  return (
    <Card sx={{ maxWidth: 500 }} className="App forgetpassword__wrapper">
      <div>
        <TextField
          id="outlined-basic"
          label="Email"
          value={obj[0].forgetPassword.Email}
          variant="outlined"
        />
        <p>
          After you select Forgot password and enter your username, we offer you
          recovery options in order to access your account. If you can't access
          these recovery options, you can click the link at the bottom of the
          page to verify your identity. You'll then be given a series of
          questions to verify that you own the account.
        </p>
        <div className="signUP__wrapper">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="contained">Cancel</Button>
          </Link>
          <Button variant="contained">submit</Button>
        </div>
      </div>
    </Card>
  );
}
export default forgetPassword;
