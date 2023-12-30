import mongoose from "mongoose"


const Posts = mongoose.Schema({
    User_Id: {type: Number, required: true},
    Titile: {type :String, required:true},
    body: {type: String, required: true}
},
{timesTamps : true}
)


const Post  = mongoose.model("Posts", Posts)

export default Post