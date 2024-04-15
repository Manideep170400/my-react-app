import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/View/AppHome";
import CreateAccount from "../src/View/createAccount";
import ForgetPassword from "../src/View/forgetPassword";
import EmpData from "../src/View/empData";
import MyProfile from "./View/myProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/empData" element={<EmpData />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
