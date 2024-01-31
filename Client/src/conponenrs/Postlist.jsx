
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { Link } from 'react-router-dom'
import Postitems from './Post_items'
function Postlist() {

    const [Post_list, setposts] = useState([])

    useEffect(()=>{

        const fetchData = async () => {
 
         const request = await axios.get(`http://localhost:9000/api/displayPosts`);
         const xog = request.data
      
         setposts(xog)

 
         }
 
         fetchData();
 
     },[])

 
  return (

        <div className='col-lg-6 mx-auto mt-5 '>
          <Link to={"/Add"}><button className='btn btn-info'>Add Post</button></Link>  
            <table border= '1' className='table shadow'>
            <thead className='bg-success'>
                        <tr >
                            <th>Titile</th>
                            <th>Body</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                <tbody>
                   
            {
                Post_list.map((Post ,index) =><Postitems  key={index} Post = {Post}/>)
              
                
            }
            </tbody>
            </table>

        </div>

  )
}

export default Postlist