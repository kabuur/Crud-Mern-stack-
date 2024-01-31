
import Postlist from "./Postlist"
import Add_post from "./Add_post"
import { BrowserRouter as Routers , Route ,Routes } from "react-router-dom"
import UpdatePost from "./UpdatePost"
function Home() {
  return (
  <div className="container mt-3 ">
    <div className="row">
  
    {/* <Add_post/> */}

    <Routers>
      <Routes>
        <Route path="/" element= {<Postlist/>}></Route>
        <Route path="/Add" element={<Add_post/>}></Route>
        <Route path="/update/:id" element={<UpdatePost/>}></Route>
      </Routes>

 
    </Routers>


   
    </div>
  
  </div>
  )
}

export default Home