const express = require("express");
const cors = require("cors");
const employRoute = require("./routes/employ");

const app = express();
app.use(cors());

app.use(express.json());
app.use("/employ",employRoute);

app.listen(3000,(req,res)=>{
    console.log("server running");
})
