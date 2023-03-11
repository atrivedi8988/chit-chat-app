// import libraries
const express = require("express");
const databaseConnect = require("./config/db");
const { notFound, errorHandler } = require("./Middlewares/errorMiddleware");
require("dotenv").config()

// variables
const port = process.env.PORT || 8080

const app = express();
app.use(express.json())

// Imports All Routes
const UserRoute = require("./Routes/user.route")
app.use("/api/user",UserRoute)

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

databaseConnect()
app.listen(port,()=>{
    console.log("listening on",port)
})