import express from "express";
import Auth from "./controller/user.controller.js";
import bodyParser from "body-parser";
// initiliaze express
//var let const
const app = express();

//checking for node js run
// app.listen(8080, () => console.log('listening at post 8080'));

//define aa route

app.get("/", (req, res) => {
  return res.json("hi this is node");
});
app.use(bodyParser.json());
app.use("/auth", Auth);

//defining the route

//listen to port
app.listen(8080, () => {
  console.log("port listening at 8080");
});
