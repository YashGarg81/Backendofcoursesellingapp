// require('dotenv')
// console.log(process.env.MONGO_URL)

const express = require('express');
const mongoose = require("mongoose");


const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const { adminRouter } = require('./routes/admin');
const app = express();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

async function main() {
await mongoose.connect("mongodb+srv://gargyash105_db_user:B3e7DSTBuQM1zHb1@cluster0.snepzje.mongodb.net/courseera-app");
app.listen(3000);
console.log("Server started at port 3000");
}

main();