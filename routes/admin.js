const router = require("express");
const adminRouter = Router();



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

 userRouter.post("/course", function(req, res)  {
    res.json({
        "message": "Signup successful"  
    });
 });

 userRouter.put("/course", function(req, res)  {
    res.json({
        "message": "Signup successful"  
    });
 });

 userRouter.get("/course", function(req, res)  {
    res.json({
        "message": "Signup successful"  
    });
 });


module.exports = {
    adminRouter: adminRouter
}
