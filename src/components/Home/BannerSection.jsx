import { Link } from "react-router-dom";

export default function BannerSection() {
  

  return (
    <div className='bg-red-100 py-14'><div className="banner container mx-auto   flex items-center text-center">
     <div className="px-10 w-full  relative  mx-auto">
       <div className='flex xl:gap-0 gap-10 xl:flex-row flex-col  justify-end  w-full '>
       <div className='details  order-1  top-[20%] xl:m-0 mx-auto xl:left-0 max-w-3xl xl:absolute'>
        <h3 className=' mb-5 font-bold'>Unlock Productivity, Organize Effortlessly, Achieve More</h3>
       <h1 className="text-3xl md:text-6xl text-red-300 font-bold italic ">TaskTrove Your Gateway to Seamless Task Management</h1>
       <Link to="/dashboard/profile"><button className="btn bg-red-400 lg:btn-lg  text-white hover:bg-red-300 rounded-none  mt-5 lg:mt-10 capitalize">Get Started Now</button></Link>
       </div>
       <img className='xl:mt-40 lg:max-w-[60%] xl:mx-0 order-0 mx-auto' src="https://i.ibb.co/X5fBbX1/Management-Illustration.png" alt="" />
       </div>
     </div>
    </div></div>
    
  );
}
