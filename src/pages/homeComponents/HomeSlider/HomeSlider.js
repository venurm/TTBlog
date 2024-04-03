import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles

import "../../customstyle.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { lowercasenosp } from "../../../utilities/checker";
import { store } from "../../../store";
export default () => {
  const images = document.querySelectorAll('LazyLoadImage');

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const LazyLoadImage = entry.target;
        LazyLoadImage.src = LazyLoadImage.dataset.src;
        observer.unobserve(LazyLoadImage);
      }
    });
  }, options);

  images.forEach(LazyLoadImage => {
    observer.observe(LazyLoadImage);
  });

  const preloadImages = (urls) => {
    urls.forEach((url) => {
      const LazyLoadImage = new Image();
      LazyLoadImage.src = url;
    });
  };

  useEffect(() => {
    // Preload images on component mount
    const imageUrls = [
      'https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/OB1.webp',
      'https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/OB2.webp',
      'https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/CouplesT-ShirtsRaja-Rani.webp',
      // Add more image URLs as needed
    ];
    preloadImages(imageUrls);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <>
      <div className="home-con">

        <Swiper
          // install Swiper modules
          style={{ height: "fit-content" }}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={5}
          loop={false}
          speed={1500}
          autoplay={{ delay: 1800, disableOnInteraction: false }}
          //slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide
            className="swiperslider"

          ><a href="/products/couple-tshirts-collection" aria-label="View more couple-tshirts-collection">
              <LazyLoadImage effect="blur"
                src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/CouplesT-ShirtsRaja-Rani.webp"

                alt="Couples T-Shirts Raja | Rani" loading="lazy"></LazyLoadImage></a>
          </SwiperSlide>
          <SwiperSlide className="swiperslider" aria-label="View more couple-tshirts-collection">
            <a href="/products/couple-tshirts-collection"><LazyLoadImage effect="blur" src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/CouplesT-ShirtsMudhalNee-MudivumNee.webp" alt="Couples T-Shirts Mudhal Nee | Mudivum Nee" loading="lazy"></LazyLoadImage></a>
          </SwiperSlide>
          <SwiperSlide className="swiperslider" aria-label="View more couple-tshirts-collection">
            {" "}
            <a href="/products/couple-tshirts-collection"><LazyLoadImage effect="blur" src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/Couples-T-Shirts-En-Uyir-Nee-Un-Uyir-Naan.webp" alt="Couples T-Shirts En Uyir Nee | Un Uyir Naan" loading="lazy"></LazyLoadImage ></a>
          </SwiperSlide>
          <SwiperSlide className="swiperslider" aria-label="View more couple-tshirts-collection">
            <a href="/products/couple-tshirts-collection"><LazyLoadImage effect="blur" src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/Couples-T-ShirtsI-Love-You.webp" alt="Couples T-ShirtsI Love You" loading="lazy"></LazyLoadImage></a>
          </SwiperSlide>
        </Swiper>
        <div className="block lg:flex" style={{ minWidth: '100%', minHeight: '50px', display: 'flex', justifyContent: 'center' }}>
          <h4 className="text-center" style={{ minWidth: '100%', minHeight: '1px', marginTop: '20px' }}>Mens Clothes</h4>
        </div>
        <Swiper
          style={{ height: "fit-content" }}
          className="Men-Swiper"
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 4000,
            reverseDirection: true,
            disableOnInteraction: false,
          }}
          slidesPerView={2}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: "auto",
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 6,
            },
          }}
        >
          <SwiperSlide className="men-swiperslider mt-5">
            <a href="/products/men" aria-label="View more mens-tshirts-collection">
              <LazyLoadImage effect="blur" src={"https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/MenMuyarchiTamiltshirt.webp"} alt="Men Muyarchi Tamil tshirt" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="men-swiperslider mt-5">
            <a href="/products/men" aria-label="View more mens-tshirts-collection">
              <LazyLoadImage effect="blur" src={"https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/MenAnbeSivamTamiltshirt.webp"} alt="Men Anbe Sivam Tamil tshirt" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="men-swiperslider mt-5">
            <a href="/products/men" aria-label="View more mens-tshirts-collection">
              <LazyLoadImage effect="blur" src={"https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/MenVilaiMathipetraSelvamTamiltshirt.webp"} loading="lazy" alt="Men Thadai Adhai Udai Tamil tshirt" />
            </a>

          </SwiperSlide>
          <SwiperSlide className="men-swiperslider mt-5">
            <a href="/products/men" aria-label="View more mens-tshirts-collection">
              <LazyLoadImage effect="blur" src={"https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/MenThadaiAdhaiUdaiTamiltshirt.webp"} alt=" Men Vilai Mathipetra Selvam Tamil tshirt" />
            </a>

          </SwiperSlide>
          <SwiperSlide className="men-swiperslider mt-5">
            <a href="/products/men" aria-label="View more mens-tshirts-collection">
              <LazyLoadImage effect="blur" src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/MenMuyarchiseiVetrikolTamiltshirt.webp" alt="Men Muyarchisei Vetrikol Tamil tshirt" />
            </a>

          </SwiperSlide>
          <SwiperSlide className="men-swiperslider mt-5">
            <a href="/products/men" aria-label="View more mens-tshirts-collection">
              <LazyLoadImage effect="blur" src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/MenOmNamashivaayaTamiltshirt.webp" alt="Men Om Namashivaaya Tamil tshirt" />
            </a>

          </SwiperSlide>
        </Swiper>
        <div className="block lg:flex" style={{ minWidth: '100%', minHeight: '30px', display: 'flex', justifyContent: 'center' }}>
          <h4 className="text-center" style={{ minWidth: '100%', minHeight: '10px', marginTop: '14px' }}>Womens Clothes</h4>
        </div>
        <br />
        <Swiper
          className="Women-Swiper"
          style={{ height: "fit-content" }}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={2}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: "auto",
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 6,
            },
          }}
        >
          <SwiperSlide className="Women-swiperslider">
            <a href="/products/women" aria-label="View more women-tshirts-collection">
              <LazyLoadImage effect="blur" src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/WomenTamizhliTamiltshirt.webp" alt="Women Tamizhli Tamil tshirt" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="Women-swiperslider">
            <a href="/products/women" aria-label="View more women-tshirts-collection">
              <LazyLoadImage effect="blur" src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/WomenTamizhumNaanumTamiltshirt.webp" alt="Women Tamizhum Naanum Tamil tshirt" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="Women-swiperslider">
            <a href="/products/women" aria-label="View more women-tshirts-collection">
              <LazyLoadImage effect="blur" src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/WomenWomenMagizhchiTamiltshirt.webp" alt="Women Magizhchi Tamil tshirt" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="Women-swiperslider">
            <a href="/products/women" aria-label="View more women-tshirts-collection">
              <LazyLoadImage effect="blur" src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/WomenAnbuTamiltshirt.webp" alt="Women Anbu Tamil tshirt" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="Women-swiperslider">
            <a href="/products/women" aria-label="View more women-tshirts-collection">
              <LazyLoadImage effect="blur" src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/WomenLoveYouTamiltshirt.webp" alt="Women Love You Tamil tshirt" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="Women-swiperslider">
            <a href="/products/women" aria-label="View more women-tshirts-collection">
              <LazyLoadImage effect="blur" src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/WomenZhlaTamiltshirt.webp" alt="Women Zhla Tamil tshirt" />
            </a>
          </SwiperSlide>
        </Swiper>
        <div className="block lg:flex ">
          <LazyLoadImage effect="blur"
            src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/OB1.webp" alt="Trending T-Shirts for Men"
            className=" LazyLoadImage mt-4 LazyLoadImage-fluid"
          ></LazyLoadImage>

          <LazyLoadImage effect="blur"
            src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/OB2.webp" alt=" Aathichoodi T-Shirts for Kids"
            className=" LazyLoadImage mt-4 LazyLoadImage-fluid"
          ></LazyLoadImage>
        </div>
        <div className="block lg:flex" style={{ minWidth: '100%', minHeight: '1px', display: 'flex', justifyContent: 'center' }}>
          <h4 className="text-center" style={{ minWidth: '100%', minHeight: '1px', marginTop: '15px' }}>Accessories</h4>
        </div>
        <Swiper
          style={{ height: "fit-content" }}
          className="Men-Swiper mb-5"
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 4000,
            reverseDirection: true,
            disableOnInteraction: false,
          }}
          slidesPerView={2}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: "auto",
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 6,
            },
          }}
        >
          <SwiperSlide className="men-swiperslider mt-5">
            <a href="/products/apparels" aria-label="View more apparels-tshirts-collection">
              <LazyLoadImage effect="blur" src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/DevotionalKeyChains.webp" alt=" Devotional Key Chains" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="men-swiperslider mt-5">
            <a href="/products/apparels" aria-label="View more apparels-tshirts-collection">
              <LazyLoadImage effect="blur" src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/CustomisedCopperBracelet.webp" alt=" Customised Copper Bracelet" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="men-swiperslider mt-5">
            <a href="/products/apparels" aria-label="View more apparels-tshirts-collection">
              <LazyLoadImage effect="blur" src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/CustomisedSilverBracelet.webp" alt="Customised Silver Bracelet" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="men-swiperslider mt-5">
            <a href="/products/apparels" aria-label="View more apparels-tshirts-collection">
              <LazyLoadImage effect="blur" src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/CustomisedKeyChains.webp" alt="Customised Key Chains" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="men-swiperslider mt-5">
            <a href="/products/apparels" aria-label="View more apparels-tshirts-collection">
              <LazyLoadImage effect="blur" src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/CustomisedWalletsinTamil.webp" alt="Customised Wallets in Tamil" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="men-swiperslider mt-5">
            <a href="/products/apparels" aria-label="View more apparels-tshirts-collection">
              <LazyLoadImage effect="blur" src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/CustomisedWalletsinEnglish.webp" alt=" Customised Wallets in English" />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>



      {/* Mobile Size  **************************************************************************************************************************/}




      <div className="home-mblcon">

        <Swiper
          // install Swiper modules
          style={{ height: "fit-content" }}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={5}
          loop={false}
          speed={1500}
          autoplay={{ delay: 1800, disableOnInteraction: false }}
          //slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide
            className="swiperslider"

          ><a href="/products/couple-tshirts-collection" aria-label="View more couple-tshirts-collection">
              <LazyLoadImage effect="blur"
                src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/CouplesT-ShirtsRaja-Rani.webp"

                alt="Couples T-Shirts Raja | Rani"></LazyLoadImage></a>
          </SwiperSlide>
          <SwiperSlide className="swiperslider" aria-label="View more couple-tshirts-collection">
            <a href="/products/couple-tshirts-collection"><LazyLoadImage effect="blur" src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/CouplesT-ShirtsMudhalNee-MudivumNee.webp" alt="Couples T-Shirts Mudhal Nee | Mudivum Nee"></LazyLoadImage></a>
          </SwiperSlide>
          <SwiperSlide className="swiperslider" aria-label="View more couple-tshirts-collection">
            {" "}
            <a href="/products/couple-tshirts-collection"><LazyLoadImage effect="blur" src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/Couples-T-Shirts-En-Uyir-Nee-Un-Uyir-Naan.webp" alt="Couples T-Shirts En Uyir Nee | Un Uyir Naan"></LazyLoadImage></a>
          </SwiperSlide>
          <SwiperSlide className="swiperslider" aria-label="View more couple-tshirts-collection">
            <a href="/products/couple-tshirts-collection"><LazyLoadImage effect="blur" src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/Couples-T-ShirtsI-Love-You.webp" alt="Couples T-ShirtsI Love You"></LazyLoadImage></a>
          </SwiperSlide>
        </Swiper>
        <div className="block lg:flex" style={{ minWidth: '100%', minHeight: '50px', display: 'flex', justifyContent: 'center' }}>
          <h4 className="text-center" style={{ minWidth: '100%', minHeight: '50px', marginTop: '20px' }}>Mens Clothes</h4>
        </div>
        <Swiper
          style={{ height: "fit-content" }}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          loop={false}
          speed={1500}
          autoplay={{ delay: 2000, disableOnInteraction: false,reverseDirection:true }}
          slidesPerView={2}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            // when window width is >= 640px
            400: {
              slidesPerView: 2.5,
            },
            640: {
              width: 640,
              slidesPerView: 2.5,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide
            className="swiperslider"

          > <a href="/products/men" aria-label="View more mens-tshirts-collection">
              <LazyLoadImage effect="blur" width={'100%'} src={"https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/mobilesizeimages/MenMuyarchiTamiltshirt.webp"} alt="Men Muyarchi Tamil tshirt" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiperslider" aria-label="View more couple-tshirts-collection">
            <a href="/products/men" aria-label="View more mens-tshirts-collection">
              <LazyLoadImage effect="blur" width={'100%'} src={"https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/mobilesizeimages/MenAnbeSivamTamiltshirt.webp"} alt="Men Anbe Sivam Tamil tshirt" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiperslider" aria-label="View more couple-tshirts-collection">
            {" "}
            <a href="/products/men" aria-label="View more mens-tshirts-collection">
              <LazyLoadImage effect="blur" width={'100%'} src={"https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/mobilesizeimages/MenThadaiAdhaiUdaiTamiltshirt.webp"} alt="Men Thadai Adhai Udai Tamil tshirt" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiperslider" aria-label="View more couple-tshirts-collection">
            <a href="/products/men" aria-label="View more mens-tshirts-collection">
              <LazyLoadImage effect="blur" width={'100%'} src={"https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/mobilesizeimages/MenVilaiMathipetraSelvamTamiltshir.webp"} alt=" Men Vilai Mathipetra Selvam Tamil tshirt" />
            </a>
          </SwiperSlide>
        </Swiper>

        <div className="block lg:flex" style={{ minWidth: '100%', minHeight: '1px', display: 'flex', justifyContent: 'center' }}>
          <h4 className="text-center" style={{ minWidth: '100%', minHeight: '1px', marginTop: '20px' }}>Womens Clothes</h4>
        </div>
        <br />
        <Swiper
          style={{ height: "fit-content" }}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          loop={false}
          speed={1500}
          autoplay={{ delay: 1900, disableOnInteraction: false }}
          slidesPerView={2}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            // when window width is >= 640px
            400: {
              slidesPerView: 2.5,
            },
            640: {
              width: 640,
              slidesPerView: 2.5,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide
            className="swiperslider"

          > <a href="/products/women" aria-label="View more women-tshirts-collection">
              <LazyLoadImage effect="blur" width={'100%'} src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/mobilesizeimages/Women-Tamizhli-Tamil-tshirt.webp" alt="Women Tamizhli Tamil tshirt" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiperslider" aria-label="View more couple-tshirts-collection">
            <a href="/products/women" aria-label="View more women-tshirts-collection">
              <LazyLoadImage effect="blur" width={'100%'} src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/mobilesizeimages/Women-Tamizhum-Naanum-Tamil-tshirt.webp" alt="Women Tamizhum Naanum Tamil tshirt" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiperslider" aria-label="View more couple-tshirts-collection">
            {" "}
            <a href="/products/women" aria-label="View more women-tshirts-collection">
              <LazyLoadImage effect="blur" width={'100%'} src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/mobilesizeimages/Women-Magizhchi-Tamil-tshirt.webp" alt="Women Magizhchi Tamil tshirt" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiperslider" aria-label="View more couple-tshirts-collection">
            <a href="/products/women" aria-label="View more women-tshirts-collection">
              <LazyLoadImage effect="blur" width={'100%'} src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/mobilesizeimages/Women-Anbu-Tamil-tshirt.webp" alt="Women Anbu Tamil tshirt" />
            </a>
          </SwiperSlide>
        </Swiper>

        <div className="block lg:flex" style={{ minWidth: '100%', minHeight: '1px' }}>
          <LazyLoadImage effect="blur" width={'100%'}
            src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/OB1.webp" alt="Trending T-Shirts for Men"
            className=" LazyLoadImage mt-4 LazyLoadImage-fluid"
          ></LazyLoadImage>

          <LazyLoadImage effect="blur" width={'100%'}
            src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/OB2.webp" alt=" Aathichoodi T-Shirts for Kids"
            className=" LazyLoadImage mt-4 LazyLoadImage-fluid"
          ></LazyLoadImage>
        </div>
        <div className="block lg:flex" style={{ minWidth: '100%', minHeight: '10px', display: 'flex', justifyContent: 'center' }}>
          <h4 className="text-center" style={{ minWidth: '100%', minHeight: '10px', margin: '20px' }}>Accessories</h4>
        </div>
        <Swiper
          // install Swiper modules
          style={{ height: "fit-content" }}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          loop={false}
          speed={1500}
          autoplay={{ delay: 1800, disableOnInteraction: false }}
          slidesPerView={2}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            // when window width is >= 640px
            400: {
              slidesPerView: 2.5,
            },
            640: {
              width: 640,
              slidesPerView: 2.5,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
          }}
        >

          <SwiperSlide
            className="swiperslider"

          >   <a href="/products/apparels" aria-label="View more apparels-tshirts-collection">
              <LazyLoadImage effect="blur" width={'100%'} src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/mobilesizeimages/DevotionalKeyChains.webp" alt=" Devotional Key Chains" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiperslider" aria-label="View more couple-tshirts-collection">
            <a href="/products/apparels" aria-label="View more apparels-tshirts-collection">
              <LazyLoadImage effect="blur" width={'100%'} src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/mobilesizeimages/CustomisedCopperBracelet.webp" alt=" Customised Copper Bracelet" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiperslider" aria-label="View more couple-tshirts-collection">
            {" "}
            <a href="/products/apparels" aria-label="View more apparels-tshirts-collection">
              <LazyLoadImage effect="blur" width={'100%'} src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/mobilesizeimages/CustomisedSilverBracelet.webp" loading="lazy" alt="Customised Silver Bracelet" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiperslider" aria-label="View more couple-tshirts-collection">
            <a href="/products/apparels" aria-label="View more apparels-tshirts-collection">
              <LazyLoadImage effect="blur" width={'100%'} src="https://assetsvilva.blr1.cdn.digitaloceanspaces.com/tamiltshirts/homepage/mobilesizeimages/CustomisedKeyChains.webp" alt="Customised Key Chains" />
            </a>
          </SwiperSlide>
        </Swiper>

      </div>
    </>
  );
};
