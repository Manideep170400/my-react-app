import schema from "../mongoDB/schema.mjs";

const { SignUp } = schema.param();

function info(app) {
  app.post("/empData", async (req, res) => {
    try {
      console.log("createAccount", req.body);
      const newData = await SignUp.create(req.body);
      console.log(newData);
      res.send(newData);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Failed to save data" });
    }
  });

  app.post("/createAccount", async (req, res) => {
    try {
      console.log("createAccount", req.body);
      const newData = await SignUp.create(req.body);
      console.log(newData);
      res.send(newData);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Failed to create account" });
    }
  });

  app.get("/myprofile", async (req, res) => {
    try {
      const email = req.query.email;
      const profileData = await SignUp.findOne({ Email: email });

      if (profileData) {
        res.status(200).json(profileData);
      } else {
        res.status(404).json({ error: "Profile not found" });
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Failed to retrieve data" });
    }
  });
}

export default { info };
