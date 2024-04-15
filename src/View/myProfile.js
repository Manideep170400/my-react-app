import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function myProfile() {
  return (
    <div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button style={{ backgroundColor: "blue", color: "white" }}>
          cancel
        </Button>
      </Link>
    </div>
  );
}
export default myProfile;
