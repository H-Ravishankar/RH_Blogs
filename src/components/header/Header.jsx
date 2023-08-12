import { NavLink } from "react-router-dom";
function Header(){
    return(

        <div className="w-full h-14 bg-indigo-200 flex  justify-between px-4 md:px-4 items-center">

          <div className=""> 
                <div className="ml-1 text-3xl text-indigo-800 font-bold font-serif">RH Blogs</div>
          </div>

          <div className="space-x-6 "> 
                <NavLink to={"/"}><button className="border-2 p-1 rounded-md bg-white font-serif">Home</button></NavLink>
                <button className="border-2 p-1 rounded-md bg-white font-serif">Blogs</button>
                <NavLink to={"/addblog"}><button className="border-2 p-1 rounded-md bg-white font-serif">Add Bolg</button></NavLink>
          </div>

        </div>
    )
}
export default Header;
