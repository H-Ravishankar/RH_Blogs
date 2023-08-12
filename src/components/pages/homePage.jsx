import { useState } from "react";
import BlogCard from "../card/blogCard";
import Header from "../header/Header";

function Homepage({blogdata} ){
   
     return (
       <div> 
        
        <div className="grid place-content-between lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:ml-52 md:ml-32">
            {
                blogdata.map((e)=>{
                    return <BlogCard img={e.img} desc={e.desc} title={e.title}/>
                })
            }
        </div>
       </div>
     )
}
export default Homepage;

//1:12