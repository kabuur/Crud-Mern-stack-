import React, { useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


function UpdatePost() {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const id = useParams()
    const handleSubmit = async(e) => {
      e.preventDefault();
      const formData = {
        Titile: title,
        body: body
      };
      try{
        const update_Post = await  axios.put(`http://localhost:9000/api/updatePost/${id}`,formData)
        console.log(update_Post.date)
       
        // window.location.reload(false);
       

      }catch(err){
        alert(err.message);
      }
     
    };
  
    return (
        <div className='col-lg-4 mx-auto'>
        <form onSubmit={handleSubmit} >
            <div className=''>
                <label>Post Titile</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>

             <div className=''>
                <label>Post Body</label><br />
                <textarea name="" id="" cols="30" rows="10" value={body} onChange={(e)=>setBody(e.target.value)}></textarea>

             </div>

             <div className=''>
                <button className='btn btn-primary' type='submit'>Update</button>
            </div>
        </form>
        </div>
   
    );

}

export default UpdatePost




 