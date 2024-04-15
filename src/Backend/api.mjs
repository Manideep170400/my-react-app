import schema from "../mongoDB/schema.mjs";

const { SignUp } = schema.param();

function info(app) {
  app.post("/createAccount", async (req, res) => {
    try {
      console.log(req.body);
      const response = await SignUp.create(req.body);
      res.send(response);
    } catch (error) {
      console.error(error);
      console.log("falied to add a data");
    }
  });
  app.post("/empData", async (req, res) => {
    console.log("req.body", req.body);
    try {
      const response = await SignUp.create(req.body);
      res.send(response);
    } catch (error) {
      console.error("error", error);
      console.log("failed to add a data");
    }
  });
  app.get("/myprofile", async (req, res) => {
    try {
      const res = await SignUp.find(req.body.Email);
      res.send(res);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Failed to retrieve data" });
    }
  });
}
export default { info };
