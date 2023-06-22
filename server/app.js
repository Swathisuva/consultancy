const express = require("express");
const app = express();
const port =8004;
require("./db/conn");
const cors=require("cors")
const multer = require("multer");
const router=require("./routes/router")
// const formidableMiddleware = require('express-formidable');

app.use(express.json());
app.use(cors());
app.use(router)
// app.use(formidableMiddleware());
app.use("/uploads",express.static("./uploads"))
const uploaded = multer({ dest: 'uploads/' });





app.listen(port,()=>{
    console.log("server start")
})