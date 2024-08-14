const mongoose=require("mongoose");
require("dotenv").config();
const dbURL=process.env.DATABASE_URL;
console.log(dbURL);
const dbConnect=()=>{
    mongoose.connect(dbURL,{})
    .then(()=>
        {
            console.log("DB connected successfully");
        }
    )
    .catch((error)=>{
            console.log("DB connection Failed")
            console.log(error);
            process.exit(1);
        }
    )
}

module.exports=dbConnect;