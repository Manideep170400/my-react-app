import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5000/";
export const obj = [
  {
    create: {
      Email: "",
      password: "",
      confirmPassword: "",
    },
    login: {
      Email: "",
      password: "",
    },
    signUp: {
      Name: "",
      Email: "",
      street: "",
      img: "",
      state: "",
      country: "",
      Age: "",
      work: "",
      zipCode: "",
      Address: "",
    },
    forgetPassword: {
      Email: "",
    },
  },
];

export function useCreateAccount() {
  const navigate = useNavigate();

  const loginPage = async () => {
    if (obj[0].login.Email === "" || obj[0].login.password) {
      alert("entered a correct a Email and  password");
      const payload = {
        Name: obj[0].signUp.Name,
        Email: obj[0].signUp.Email,
        street: obj[0].signUp.street,
        img: obj[0].signUp.img,
        state: obj[0].signUp.state,
        country: obj[0].signUp.country,
        Age: obj[0].signUp.Age,
        work: obj[0].signUp.work,
        zipCode: obj[0].signUp.zipCode,
        Address: obj[0].signUp.Address,
      };
      try {
        const response = await axios.post(`${API_URL}empData`, payload);
        console.log("Data submitted:", response.data);
        navigate("/empData");
      } catch (error) {
        console.error("error", error);
        console.log("error is response ");
      }
    } else {
      alert("entered a wrong Email and password");
    }
  };
  const createAccount = async () => {
    const payload = {
      email: obj[0].create.Email,
      password: obj[0].create.password,
    };
    try {
      const response = await axios.post(`${API_URL}createAccount`, payload);
      console.log(response.data);
      navigate("/createAccount");
      return response.data;
    } catch (error) {
      console.error("Error creating account:", error);
    }
  };
  const forgetPassword = () => {
    navigate("/forgetpassword");
  };
  return {
    createAccount,
    forgetPassword,
    loginPage,
  };
}
