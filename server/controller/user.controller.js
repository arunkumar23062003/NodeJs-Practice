import express from "express";

const Router = express.Router();

//get
//post
//put
//delete

Router.post("/signup", (req, res) => {
  try {
    console.log(req.body);
  } catch (err) {}
});

export default Router;
