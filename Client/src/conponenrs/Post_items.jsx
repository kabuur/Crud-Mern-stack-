import axios from 'axios'
import React, { useState } from 'react'

import { Link } from 'react-router-dom'

function Post_items({Post}) {
 


   const delete_post = async(id) =>{
    const deletePostID = await axios.delete(`http://localhost:9000/api/deletePost/${id}`)
    window.location.reload(false);

   }

  return (

          <tr>
            <td>
              {Post.Titile}
            </td> 
            <td>
                {Post.body}
            </td> 
            <td>
               <Link to={`/update/${Post._id}`}> <button className=' btn btn-success text-white '> Update</button></Link> 
            </td> 
            <td> 
                <button className='text-white btn btn-danger' onClick={()=>delete_post(Post._id)}> Delete</button>
            </td>
          </tr>
    
    
    
  )
}

export default Post_items