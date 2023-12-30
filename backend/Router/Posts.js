import express from 'express'
import Post from '../model/Post.js';

const Post_Rout = express.Router();

// create posts 
Post_Rout.post("/createPost", async(req, res) => {

    const req_post = {
    User_Id: req.body.User_Id,
    Titile: req.body.Titile,
    body: req.body.body
    }

    try{
        const Inser = await Post.insertMany(req_post)
        res.send(Inser)
        return
    }catch(err){
        res.send(err.message)
        return
    
    }
});


// display all posts 
Post_Rout.get("/displayPosts", async(req, res) => {
    try{
        const AllPosts = await Post.find()
        res.send(AllPosts)
    }
    catch(err){
        res.send(err.message)
    }
})

//update spicific post 
Post_Rout.put("/updatePost/:id", async(req, res) => {
    try{
       const updatepost = await Post.findOne({_id: req.params.id})

        if (req.body.Titile){
            updatepost.Titile = req.body.Titile
        }
        if (req.body.body){
            updatepost.body = req.body.body
        }

       await updatepost.save()
       res.send(updatepost)
    }
    catch(err){
        res.send(err.message)
    }
})


Post_Rout.delete("/deletePost/:id", async(req, res) => {
    try{
        const deletePost = await Post.findByIdAndDelete(req.params.id).then(() => {
            res.send("deleted post")
        }).catch((err)=>{
            res.send(err.message)
        })
        
        return true
    }catch(err){
        res.send(err.message)
        return
    }
})

export default Post_Rout