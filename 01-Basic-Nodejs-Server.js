/**
 * Create a simple Node.js server that listens on port 3000
 * and responds with "Hello, World!" for all incoming HTTP requests.
 * You can use any library or framework of your choice
 */

const express = require("express");
const app = express();

// As we have to respond same for all request, have used /*
app.use("/*",(req,res) => {
    return res.send("Hello, World");
});

app.listen(3000,()=>{
    console.log(`App is listening on Port 3000`);
});