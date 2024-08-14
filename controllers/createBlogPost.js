const blogPost=require("../models/blogPost");

const createBlogPost=async (req,res)=>{
    try{
        const {title,authorName,blogContent}=req.body;
        const response=await blogPost.create({title,authorName,blogContent});
        console.log("Post Created ",response);
        res.status(200).json({
            success:true,
            data:response,
            message:"Blog Post created successfully"
        })
    }catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            message:"Blog post not created"
        })
    }
}

module.exports=createBlogPost;