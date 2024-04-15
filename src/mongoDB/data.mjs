import { mongoose } from "mongoose";
import api from "../Backend/api.mjs";

const mongo_url =
  "mongodb+srv://manideepreddy170400:Manideep100@cluster0.tvgnemc.mongodb.net/serviceCaartReact";

async function data(app) {
  const res = await mongoose.connect(mongo_url);
  try {
    api.info(app);
    console.log("mongoDB is connected");
  } catch (error) {
    console.error("error", error);
    console.log("mongoDB is not connected");
  }
}

export default {
  data,
};
