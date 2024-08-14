const express=require("express");
const app=express();


//middleware
app.use(express.json());

require("dotenv").config();
PORT= process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`BlogApp is listening to port ${PORT}`);
})

const dbConnect=require("./config/dbConnect")
dbConnect();

const blogRoutes=require("./router/blogRoutes")
// mouting the path
app.use("/api/v1",blogRoutes);

app.get("/",(req,res)=>{
    res.send("App is running")
})