import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export const FashionOverview = () => {
  // const {storeid,footercopyrighttext} = props;
  const isActive = (path) => {
      const { pathname } = useLocation();
      return pathname === path;
    };
  return (
    <div className=' mx-auto pt-5 p-4'>
      <div className="flex container mx-auto">
        <div className=""> 


        </div>
      

    </div>
    <h2 style={{borderLeft:'5px solid red',fontWeight:800}}> BROWSING : FASHION</h2 >
    <div class="flex flex-wrap container mx-auto ">
  <div class="w-full md:w-1/2 px-4">
    <img class=" " src="https://images.bewakoof.com/image/content/2024/03/20120029/genz-768x432.png" alt="Image"/>
    <h2 class="text-xl font-bold">List of Top Perfume Brands in India for Men | Indian Perfume Brands</h2>
    <p class="text-sm text-gray-900">May 7, 2023 - By Tamiltshirts</p>
    <p class="mt-2">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, on 1.10</p>
  </div>

  <div class="w-full md:w-1/2 px-4">
    <img class="" src="https://images.bewakoof.com/image/content/2024/03/20154817/2-768x432.png" alt="Image"/>
    <h2 class="text-xl font-bold">List of Top Perfume Brands in India for Men | Indian Perfume Brands</h2>
    <p class="text-sm text-gray-900">May 7, 2023 - By Tamiltshirts</p>
    <p class="mt-2">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClint 1.10</p>
  </div>
</div>
     <div class="flex flex-wrap">
  {/* <!-- First Item --> */}
  <div class="w-full md:w-1/2  flex mt-5">
    <img class="w-24  md:w-32"style={{width:'150px',height:'100px'}}  src="https://images.bewakoof.com/image/content/2024/03/27005601/best-anime-of-all-time.png" alt="Image"/>
    <div class="ml-2">
      <h2 class="text-sm font-bold">List of Top Perfume Brands in India for Men | Indian Perfume Brands</h2>
      <p class="text-sm text-gray-900">May 7, 2023 - By Tamiltshirts</p>
    </div>
  </div>
  
  {/* <!-- Second Item --> */}
  <div class="w-full md:w-1/2 flex mt-5">
    <img class="w-24 md:w-32"style={{width:'150px',height:'100px'}}  src="https://images.bewakoof.com/image/content/2024/03/27005601/best-anime-of-all-time.png" alt="Image"/>
    <div class="ml-2">
      <h2 class="text-sm font-bold">List of Top Perfume Brands in India for Men | Indian Perfume Brands</h2>
      <p class="text-sm text-gray-900">May 7, 2023 - By Tamiltshirts</p>
    </div>
  </div>
</div>
     <div class="flex flex-wrap">
  {/* <!-- First Item --> */}
  <div class="w-full md:w-1/2 flex mt-5">
    <img class="w-24  md:w-32"style={{width:'150px',height:'100px'}}  src="https://images.bewakoof.com/image/content/2024/03/27005601/best-anime-of-all-time.png" alt="Image"/>
    <div class="ml-2">
      <h2 class="text-sm font-bold">List of Top Perfume Brands in India for Men | Indian Perfume Brands</h2>
      <p class="text-sm text-gray-900">May 7, 2023 - By Tamiltshirts</p>
    </div>
  </div>
  
  {/* <!-- Second Item --> */}
  <div class="w-full md:w-1/2  flex mt-5">
    <img class="w-24 md:w-32"style={{width:'150px',height:'100px'}}  src="https://images.bewakoof.com/image/content/2024/03/27005601/best-anime-of-all-time.png" alt="Image"/>
    <div class="ml-2">
      <h2 class="text-sm font-bold">List of Top Perfume Brands in India for Men | Indian Perfume Brands</h2>
      <p class="text-sm text-gray-900">May 7, 2023 - By Tamiltshirts</p>
    </div>
  </div>
</div>


 
     </div>
  )
}
