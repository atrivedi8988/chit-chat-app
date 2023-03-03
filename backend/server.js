// import libraries
const express = require("express")
require("dotenv").config()

// variables
const port = process.env.PORT || 8080

const app = express();

app.listen(port,()=>{
    console.log("listening on",port)
})