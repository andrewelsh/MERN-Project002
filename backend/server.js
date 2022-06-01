import express from "express";
import data from "./data.js";

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("HomePage");
});
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.listen(port, () => {
  console.log(`listening on: http://localhost:${port}`);
});
