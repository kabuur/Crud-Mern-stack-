import express from "express"
import mongoose from "mongoose";
import Post from "./model/Post.js";
import Post_Rout from "./Router/Posts.js";
import bodyParser from "body-parser";
import cors from "cors";

// creating connection database mongoose
mongoose.connect("mongodb://127.0.0.1:27017/CRUID").then(()=>{
   console.log("connected");
}).catch((err)=>{
    console.error("Error connecting to", err);
})



const app = express();
// port of the App 
const port = 9000
app.use(cors())
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/create", async(req,res) => {
    try{
        await Post.remove({})
        console.log("created")
    }
    catch(err){
        console.log(err.message)
    }
})

app.use("/api", Post_Rout)



app.listen(port, () =>{
    console.log(`listening on http://localhost:${port}`)
})