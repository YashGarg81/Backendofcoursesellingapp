const express = require('express');

const app = express();

app.post("/user/signup", function(req, res)  {
    res.json({
        "message": "Signup successful"  
    });
});

app.post("/user/signin", function(req, res)  {
    res.json({
        "message": "Signup successful"  
    });
});

app.get("/user/purchases", function(req, res)  { //help to show the purchase history of the user
    res.json({
        "message": "Signup successful"  
    });
});

app.post("/course/purchase", function(req, res)  {
    // you would expect user to pay you some money
    res.json({
        "message": "Signup successful"  
    });
});

app.get("/courses", function(req, res)  { // help to show the list of all the courses 
    res.json({
        "message": "Courses retrieved successfully"  
    });
});
app.listen(3000);