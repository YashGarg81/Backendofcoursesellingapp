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

 adminRouter.post("/", function(req, res)  {
    res.json({
        "message": "Signup successful"  
    });
 });

 adminRouter.put("/", function(req, res)  {
    res.json({
        "message": "Signup successful"  
    });
 });

 adminRouter.get("/bulk", function(req, res)  {
    res.json({
        "message": "Signup successful"  
    });
 });


module.exports = {
    adminRouter: adminRouter
}
