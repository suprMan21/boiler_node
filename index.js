import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  //some code to return on post request
});

app.patch("/update", (req, res) => {
    //some code to return on patch request
  });

  app.delete("/delete", (req, res) => {
    //some code to return on delete request
  });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});