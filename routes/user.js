const { Router } = require("express");

const userRouter = Router();

  userRouter.post("/signup", function(req, res)  {
    res.json({
        "message": "Signup successful"  
    });
 });

 userRouter.post("/signin", function(req, res)  {
    res.json({
        "message": "Signup successful"  
    });
 });

 userRouter.get("/purchases", function(req, res)  { //help to show the purchase history of the user
    res.json({
        "message": "Signup successful"  
    });
 });


module.exports = {
    userRouter: userRouter
}