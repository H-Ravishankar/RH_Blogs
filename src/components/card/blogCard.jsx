function BlogCard(props){
    const {img,title,desc} = props
    return(
        <div className=" mt-10 bg-white border-2  w-80 h-[480px] rounded-2xl hover:bg-indigo-200"> 
          <div className="">
          <img className="w-72 h-56 overflow-hidden ml-3 py-4 " src={img} alt="" /> 
          </div>
           <h1 className="text-3xl font-semibold font-serif p-2"> Blog Tilte : {title}</h1>
           <p className="mt-2 text-sm p-2 font-serif font-semibold">Blog Description: {desc} </p>
            <div className="ml-1 mr-1 flex justify-between mt-6  p-2">
            <button className="border-2 p-1 rounded-md bg-white">Read Blog</button>
           <button className="border-2 p-1 rounded-md bg-white">Edit Blog</button>
           <button className="border-2 p-1 rounded-md bg-white">Delete Blog</button>

            </div>
           
        </div>
    )

}
export default BlogCard;