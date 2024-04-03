import React from 'react'
import NavbarMain from '../navbarmain'

import './blogstyle.css'
import { Link, Outlet, Route, Router, useLocation } from 'react-router-dom';
import { Beauty } from './beauty';
import { Fashionblog } from './Fashionblog';
import Footer from '../footer';
import { Component1 } from './component1';
import { FashionOverview } from './overviewpages/fashion-overview';
import { BeautyOverview } from './overviewpages/beauty-overview';
import { BlogNavbar } from './overviewpages/blognavbar';
export const BlogPage = (props) => {
    const {storeid,footercopyrighttext} = props;
    const isActive = (path) => {
        const { pathname } = useLocation();
        return pathname === path;
      };
  return (
    <>
    {/* <NavbarMain storeid={storeid}/> */}

    <div className='' style={{overflow:'hidden'}}>
   
   <BlogNavbar/>


    <div className="flex flex-wrap container mx-auto pt-10 " >
        <div className="w-full md:w-1/2 px-2 mb-2" style={{overflow:'hidden'}}>
        <div className="banner-1 bg-gray-800 text-white py-6 text-center " >
        <div className="mt-6 text-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mr-4">Entertainment</button>
        <p className="text-sm  mt-1">December 27, 2024</p>
    </div>

    </div>
    
        </div>
        <div className="w-full md:w-1/2 px-2 md:px-0">
            <div className="w-full mb-1">
            <div className='bannn-2'>   <div className=" text-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mr-4">Entertainment</button>
        <p className="text-sm text-white pb-2 mt-1">December 27, 2024</p>
    </div> </div>

            </div>
            <div className="flex flex-wrap ">
                <div className="w-full md:w-1/2 mb-1">
                <div className='bannn-3 mr-1'>   <div className=" text-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mr-4">Entertainment</button>
        <p className="text-sm  text-white pb-2 mt-1">December 27, 2024</p>
    </div> </div>

                </div>
                <div className="w-full md:w-1/2 ">
                <div className='bannn-4'>   <div className=" text-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded mr-4">Entertainment</button>
        <p className="text-sm text-white pb-2 mt-1">December 27, 2024</p>
    </div> </div>

                </div>
            </div>
        </div>
    </div>

    

    {/* <section>
    <div className="flex container mx-auto">
        <div className="flex-1 px-8 pt-8"> 
        <div className="d-flex items-center justify-between blogcatmenu" >
            <div className=" bg-gray-500 ">LATEST ARTICLES</div>

            
<div className="flex space-x-4">
  <Link to="/allblogs" className={` ml-4  ${isActive('/allblogs') ? 'text-black' : 'text-gray-100'}`}>All</Link>
  <Link to="/fashionblog" className={` ml-4  ${isActive('/fashionblog') ? 'text-black' : 'text-gray-100'}`}>Fashion</Link>
  <Link to="/beauty" className={` ml-4  ${isActive('/beauty') ? 'text-black' : 'text-gray-100'}`}>Beauty</Link>
  <Link to="/bollywood" className={` ml-4  ${isActive('/bollywood') ? 'text-black' : 'text-gray-100'}`}>Bollywood</Link>
  <Link to="/general" className={` ml-4  ${isActive('/general') ? 'text-black' : 'text-gray-100'}`}>General</Link>
</div>
    </div>
    <div>   <Outlet /></div>
        </div>
        <div className="flex-2 bg-green-200"> 
             Content for the second column goes here 
        </div>

    </div>
    </section> */}
    
    <div class="flex container pt-4 mx-auto">
  <div class="w-2.5/3"> <div className="flex container mx-auto">
        <div className=""> 
        <div className="d-flex items-center justify-between blogcatmenu" >
            <div className=" bg-gray-500 ">LATEST ARTICLES</div>

            
<div className="">
  <Link to="/allblogs" className={` ml-2 md:ml-4  ${isActive('/allblogs') ? 'text-black' : 'text-gray-100'}`}>All</Link>
  <Link to="/fashionblog" className={` ml-4 ${isActive('/fashionblog') ? 'text-black' : 'text-gray-100'}`}>Fashion</Link>
  <Link to="/beauty" className={` ml-4  ${isActive('/') ? 'text-black' : 'text-gray-100'}`}>Beauty</Link>
  <Link to="/bollywood" className={` ml-4  ${isActive('/bollywood') ? 'text-black' : 'text-gray-100'}`}>Bollywood</Link>
  <Link to="/general" className={` ml-4 mr-4 ${isActive('/general') ? 'text-black' : 'text-gray-100'}`}>General</Link>
</div>
    </div>
    <div>   <Outlet /></div>
        </div>
      

    </div>
    
    <section>
  <div className='container mx-auto mt-10'>
    <div className="flex flex-wrap">
      {/* First Video */}
      <div className="w-full md:w-1/2 bg-red-200 p-4">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/QGJJDXxw6mw?si=gIes4ATP7laMCWCG"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      {/* Second Column */}
      <div className="w-full md:w-1/2 rounded-lg">
        {/* First Row in Second Column */}
        <div className="w-full bg-red-200 p-4 rounded-lg">
          <iframe
            width="100%"
            height="100"
            src="https://www.youtube.com/embed/QGJJDXxw6mw?si=gIes4ATP7laMCWCG"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        {/* Second Row in Second Column */}
        <div className="w-full bg-red-200 p-4 rounded-lg">
          <iframe
            width="100%"
            height="100"
            src="https://www.youtube.com/embed/QGJJDXxw6mw?si=gIes4ATP7laMCWCG"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-full bg-red-200 p-4 rounded-lg">
          <iframe
            width="100%"
            height="100"
            src="https://www.youtube.com/embed/QGJJDXxw6mw?si=gIes4ATP7laMCWCG"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</section>







    <div class="w-2.5/3"> <div className="flex container mx-auto">
        <div className=""> 
        <div className="d-flex items-center justify-between blogcatmenu" >
            <div className=" bg-gray-500 ">LATEST LEISURE</div>

            
<div className=" space-x-4">
  <Link to="/allblogs" className={` ml-4  ${isActive('/allblogs') ? 'text-black' : 'text-gray-100'}`}>All</Link>
  <Link to="/" className={` ml-4`}>Fashion</Link>
  <Link to="/beauty" className={` ml-4 mr-4 ${isActive('/beauty') ? 'text-black' : 'text-gray-100'}`}>Treavel</Link>
</div>
    </div>
    <div>   <Outlet /></div>
        </div>
      

    </div>
    <div className="d-flex items-center justify-between blogcatmenu" >
            <div className=" bg-gray-500 ">FROM BEAUTY</div></div>
    <BeautyOverview/>
    <div className="d-flex items-center justify-between blogcatmenu" >
            <div className=" bg-gray-500 ">LATEST FASHION</div></div>
    
    <FashionOverview/>
    </div>
    
    </div>
  <div class="w-1.5/3 pt-10 hidden md:block  mt-5">
    
    <img src='https://joinourvillage.org/wp-content/uploads/2024/02/Image-78-min-768x512.jpg'>
    </img>
    <p>In the field of fashion, minimalism is one approach to embrace a sleek and fashionable…</p>
    
    <div className='popularposts '>
        <h5>POPULAR POSTS</h5>
    <div class="flex mb-3">
  <div class="">
  <img src='https://images.bewakoof.com/image/content/2024/03/27005601/best-anime-of-all-time-768x432.png'/>
  </div>
  

  <div class="content">
  Don’t Miss The Best Anime Of All Time To Watch
  <div>
  <p>March 27, 2024</p>
  </div>
  </div>
</div>
    <div class="flex mb-3">
  <div class="">
  <img src='https://images.bewakoof.com/image/content/2024/03/27005601/best-anime-of-all-time-768x432.png'/>
  </div>
  

  <div class="content">
  Don’t Miss The Best Anime Of All Time To Watch
  <div>
  <p>March 27, 2024</p>
  </div>
  </div>
</div>
    <div class="flex mb-3">
  <div class="">
  <img src='https://images.bewakoof.com/image/content/2024/03/27005601/best-anime-of-all-time-768x432.png'/>
  </div>
  

  <div class="content">
  Don’t Miss The Best Anime Of All Time To Watch
  <div>
  <p>March 27, 2024</p>
  </div>
  </div>
</div>
    <div class="flex mb-3">
  <div class="">
  <img src='https://images.bewakoof.com/image/content/2024/03/27005601/best-anime-of-all-time-768x432.png'/>
  </div>
  

  <div class="content">
  Don’t Miss The Best Anime Of All Time To Watch
  <div>
  <p>March 27, 2024</p>
  </div>
  </div>
</div>
      </div>
    </div>


    
</div>
   
    <section>
        <div className='container mx-auto mt-10'>
    <div class="flex flex-wrap">
  <div class="w-full md:w-1/3 bg-red-200 p-4"><iframe width="100%" height="315" src="https://www.youtube.com/embed/QGJJDXxw6mw?si=gIes4ATP7laMCWCG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
  <div class="w-full md:w-1/3 bg-red-200 p-4"><iframe width="100%" height="315" src="https://www.youtube.com/embed/QGJJDXxw6mw?si=gIes4ATP7laMCWCG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
  <div class="w-full md:w-1/3 bg-red-200 p-4"><iframe width="100%" height="315" src="https://www.youtube.com/embed/QGJJDXxw6mw?si=gIes4ATP7laMCWCG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

</div>
</div>
    </section>
    </div>
    <section>
     <Footer storeid={storeid} footercopyrighttext={footercopyrighttext}/>

    </section>
    </>
  )
}






