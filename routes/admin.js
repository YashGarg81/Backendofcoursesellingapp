const {Router} = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");



adminRouter.post("/signup", function(req, res)  {
    res.json({
        "message": "Signup successful"  
    });
 });

 adminRouter.post("/signin", function(req, res)  {
    res.json({
        "message": "Signup successful"  
    });
 });

 adminRouter.post("/course", function(req, res)  {
    res.json({
        "message": "Signup successful"  
    });
 });

 adminRouter.put("/course", function(req, res)  {
    res.json({
        "message": "Signup successful"  
    });
 });

 adminRouter.get("/course", function(req, res)  {
    res.json({
        "message": "Signup successful"  
    });
 });


module.exports = {
    adminRouter: adminRouter
}
