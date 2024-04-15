import express from "express";
import cors from "cors";
import mongoose from "./src/mongoDB/data.mjs";

const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());

await mongoose.data(app);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
