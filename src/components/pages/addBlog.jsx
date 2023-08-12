import { useState } from "react";
import Header from "../header/Header";

function AddBlog({updateData,prevData}){
    const[blogData,setBlogData] = useState({
        title:"",
        img:"",
        desc:"",
        content:""
    })
    const submitData = ()=>{
       updateData([blogData,...prevData])
    }
    return(
        <div className="grid place-content-center    h-screen bg-pink-50">
              
               <div className=" grid place-content-center lg:p-5 lg:h-max ;lg:w-full md:h-max md:w-full border-2 border-purple-500 rounded-xl bg-yellow-200 justify-center space-y-12 ">
               <input className="border-2 border-pink-200 lg:p-2  rounded-xl lg:w-72 lg:ml-0 sm:w-48 sm:p-1 sm:mt-3 sm:ml-8 " type="text" placeholder="Enter Image url " value={blogData.img} onChange={(e)=>{setBlogData({...blogData,img:e.target.value})}} /> 
               <input className="border-2 border-pink-200 lg:p-2  rounded-xl lg:w-72 lg:ml-0 sm:w-48 sm:p-1 sm:mt-3 " type="text" placeholder="Enter Title of your blog "value={blogData.title} onChange={(e)=>{setBlogData({...blogData,title:e.target.value})}} /> 
               <input className="border-2 border-pink-200 lg:p-2  rounded-xl lg:w-72 lg:ml-0 sm:w-48 sm:p-1 sm:mt-3 sm:ml-8 " type="text" placeholder="Enter Description.... "value={blogData.desc} onChange={(e)=>{setBlogData({...blogData,desc:e.target.value})}} /> 
               <textarea className="border-2 border-pink-200 lg:p-2  rounded-xl lg:w-72 lg:ml-0 sm:w-48 sm:p-1 sm:mt-3 sm:ml-8"  name="" placeholder="Type Blog" id="" cols="20" rows="2" value={blogData.content} onChange={(e)=>{setBlogData({...blogData,content:e.target.value})}}/>
               <button onClick={submitData} className="border-2 w-32  rounded-xl p-2 text-purple-500  bg-purple-200 font-semibold">Add Blog</button>
              
            </div>
        </div>
    )
}
export default AddBlog;