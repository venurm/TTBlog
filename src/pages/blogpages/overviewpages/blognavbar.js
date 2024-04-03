import React, { useState } from 'react'
import '../blogstyle.css'

export const BlogNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };

  return (
    <div> 
       <div className=' nav-blog'>
      <div className='container mx-auto'>
    <div className="d-flex  mx-auto py-4  justify-between  ">
    <div className='flex'>
    <button className="openbtn md:hidden  " onClick={toggleMenu}>&#9776;</button >
       
        <img width={'150px'}  src='https://assetsvilva.blr1.cdn.digitaloceanspaces.com/store/2/logo.webp'/></div>
        <div className='flex'>
        <div className='nav-btn'>SHOP TAMILTSHIRTS</div>
        <div className="text-black -lg mb-2  py-2 "><i class="tsi tsi-search"></i></div>
    </div></div></div>
    </div>
    <div className=' nav-blog2 px-12 md:block hidden shadow-2xl'>
    <div className="d-flex px-12 mx-auto container  justify-between  ">
        <p className="text-black  mb-2  py-2 ">Fashion </p>
        <p className="text-black  mb-2  py-2 ">Beauty </p>
        <p className="text-black  mb-2  py-2 ">Entertainment </p>
        <p className="text-black  mb-2  py-2 ">Leisure </p>
        <p className="text-black  mb-2  py-2 ">Fitness </p>
        <p className="text-black  mb-2  py-2 ">Shopping </p>
        <p className="text-black  mb-2  py-2 ">General </p>
    </div>
    </div>
    <div>
            <div className={`sidenav ${isOpen ? 'open' : ''}`}>
                <button className="closebtn" onClick={toggleMenu}>&times;</button>
                <div className="sidenav-content">
                  <div className='mb-5 flex justify-center'>
                <img width={'150px'}  src='https://assetsvilva.blr1.cdn.digitaloceanspaces.com/store/2/logo.webp'/></div>
                    <p className=" mb-2 py-2">Fashion</p>
                    <p className=" mb-2 py-2">Beauty</p>
                    <p className=" mb-2 py-2">Entertainment</p>
                    <p className=" mb-2 py-2">Leisure</p>
                    <p className=" mb-2 py-2">Fitness</p>
                    <p className=" mb-2 py-2">Shopping</p>
                    <p className=" mb-2 py-2">General</p>
                </div>
            </div>
        </div>
    
    </div>
  )
}
