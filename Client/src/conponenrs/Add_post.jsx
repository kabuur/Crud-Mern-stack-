import React, { useState } from 'react'
import axios from 'axios';
function Add_post() {

    // const  [user, setUser] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      // Perform form submission or API call with the form data
      const formData = {
        User_Id: 1,
        Titile: title,
        body: body
      };

      try{

        const Add_Post = await  axios.post('http://localhost:9000/api/createPost',formData)

        window.location.reload(false);

      }catch(err){
        alert(err.message);
      }
     
    };
  
    return (
        <div className='col-lg-4'>
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
                <button className='btn btn-primary' type='submit'>Save</button>
            </div>
        </form>
        </div>
   
    );

}

export default Add_post



// function FormComponent() {
    
//   }
  
 