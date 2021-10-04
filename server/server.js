/** @format */
import express from "express";

const app = express();

app.get("/api/:message", (req, res) => {
  res.status(200).send(req.params.message);
});

app.listen(8000, () => {
  console.log(`Server is running on Port ${8000}`);
});
