// import libraries
const express = require("express");
const databaseConnect = require("./config/db");
require("dotenv").config()

// variables
const port = process.env.PORT || 8080

const app = express();
app.use(express.json())

// Imports All Routes
const UserRoute = require("./Routes/user.route")
app.use("/api/user",UserRoute)

databaseConnect()
app.listen(port,()=>{
    console.log("listening on",port)
})