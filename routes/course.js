const { Router } = require("express");
const courseRouter = Router();

    courseRouter.post("/course/purchase", function(req, res)  {
    // you would expect user to pay you some money
    res.json({
        "message": "Signup successful"  
    });
});

courseRouter.get("/course/preview", function(req, res)  { // help to show the list of all the courses 
    res.json({
        "message": "Courses retrieved successfully"  
    });
});


module.exports = {
    courseRouter: courseRouter
}