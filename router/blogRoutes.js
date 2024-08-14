const createBlogPost=require("../controllers/createBlogPost");
const blogPost=require("../models/blogPost")

const express=require("express");
const router=express.Router();

router.post("/createBlogPost",createBlogPost);
router.get("/getOnePost",async(req,res)=>{
    try{
        const authorName=req.body.authorName;
        console.log(authorName);
        const blogPostResponse=await blogPost.findOne({});
        console.log("First Blog Post",blogPostResponse);
        res.send(blogPostResponse);
    }
    catch(e){
        console.log(e);
        res.send("Not Found");
    }
})

module.exports=router;
