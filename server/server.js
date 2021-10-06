/** @format */
import express from "express";
import { readdirSync } from "fs";


const morgan = require('morgan');

const app = express();

app.use(morgan("dev"))

readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
