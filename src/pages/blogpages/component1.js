import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export const Component1 = (props) => {
    const {storeid,footercopyrighttext} = props;
    const isActive = (path) => {
        const { pathname } = useLocation();
        return pathname === path;
      };
  return (
    <div>    <section>
    {/* <div className="flex container mx-auto">
        <div className=" px-8 pt-8"> 
        <div className="d-flex items-center justify-between blogcatmenu" >
            <div className=" bg-gray-500 ">LATEST ARTICLES</div>

            
<div className=" space-x-4">
  <Link to="/allblogs" className={` ml-4  ${isActive('/allblogs') ? 'text-black' : 'text-gray-100'}`}>All</Link>
  <Link to="/fashionblog" className={` ml-4`}>Fashion</Link>
  <Link to="/beauty" className={` ml-4  ${isActive('/beauty') ? 'text-black' : 'text-gray-100'}`}>Beauty</Link>
  <Link to="/bollywood" className={` ml-4  ${isActive('/bollywood') ? 'text-black' : 'text-gray-100'}`}>Bollywood</Link>
  <Link to="/general" className={` ml-4  ${isActive('/general') ? 'text-black' : 'text-gray-100'}`}>General</Link>
</div>
    </div>
    <div>   <Outlet /></div>
        </div>
      

    </div> */}
    </section></div>
  )
}
