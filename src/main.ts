import express from "express";
import { registerRoutes } from "./routes";

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("hi");
});

registerRoutes(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
