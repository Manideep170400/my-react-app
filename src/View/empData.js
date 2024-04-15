import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import { obj } from "../store/redux";
import axios from "axios";

function empData() {
  return (
    <Card sx={{ maxWidth: 1000 }}>
      <div style={{ width: "500px", paddingLeft: "500px" }}>
        <TextField
          id="outlined-basic"
          label="Name"
          value={obj[0].signUp.Name}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Email"
          value={obj[0].signUp.Email}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Age"
          value={obj[0].signUp.Age}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Address"
          value={obj[0].signUp.Address}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="street Area"
          value={obj[0].signUp.street}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="state"
          value={obj[0].signUp.state}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="country"
          value={obj[0].signUp.country}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="zipCode"
          value={obj[0].signUp.zipCode}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="work"
          value={obj[0].signUp.work}
          variant="outlined"
        />
        <label>Image</label>
        <input
          type="file"
          id="file-input"
          value={obj[0].signUp.img}
          name="ImageStyle"
        />
        <div
          className="signUP__wrapper App "
          style={{
            paddingTop: "10px",
            borderRadius: "5px",
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button style={{ backgroundColor: "#005AFF", color: "white" }}>
              cancel
            </Button>
          </Link>
          <Link to="/myprofile" style={{ textDecoration: "none" }}>
            <Button style={{ backgroundColor: "#005AFF", color: "white" }}>
              Submit
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
export default empData;
