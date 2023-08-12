import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AddBlog from "../pages/addBlog";
import Homepage from "../pages/homePage";

function CustomRoutes(){
    const[blogdata, setBlogData] = useState([
        {title:"Blog 1",img:"https://images.pexels.com/photos/3697742/pexels-photo-3697742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",desc:"desc 1"},
        {title:"Blog 2",img:"https://images.pexels.com/photos/382177/pexels-photo-382177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",desc:"desc 2"},
        {title:"Blog 3",img:"https://images.pexels.com/photos/1080884/pexels-photo-1080884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",desc:"desc 3"},
        {title:"Blog 4",img:"https://images.pexels.com/photos/3493730/pexels-photo-3493730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",desc:"desc 4"},
        {title:"Blog 5",img:"https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",desc:"desc 5"}
    ])

    return(
        <Routes>
               <Route path="/" element={<Homepage blogdata={blogdata}/>}/>
               <Route path="/addblog" element={<AddBlog  prevData = {blogdata}updateData={setBlogData}/>}/>
        </Routes>
    )
}
export default CustomRoutes;