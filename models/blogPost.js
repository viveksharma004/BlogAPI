const mongoose=require("mongoose");

const blogPostSchema=new mongoose.Schema(
        {
            title:{
                type: String,
                required:true,
                maxLength: 50
            },
            authorName:{
                type: String,
                required:true,
                maxLength : 50
            },
            blogContent:{
                type: String,
                required:true,
            },
            createdAt:{
                type:Date,
                default:Date.now(),
            },
            updatedAt:{
                type:Date,
                default:Date.now()
            }
    }
)

module.exports=mongoose.model("blogPost",blogPostSchema);