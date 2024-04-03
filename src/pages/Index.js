import React, { Suspense, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  handleGetCartInfoStorageItems,
} from "../utilities/cartManager";
import "./customstyle.css";
import { getUserdata } from "../utilities/sessionexpiry";

const HomeSlider = React.lazy(() => import('./homeComponents/HomeSlider/HomeSlider'))
const NavbarMain = React.lazy(() => import('./navbarmain'))
const HomepageFooter = React.lazy(() => import('./homepagefooter'))

// document.addEventListener("DOMContentLoaded", function () {
//   const lazyImages = document.querySelectorAll('img');

//   const options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.1
//   };

//   const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         const img = entry.target;
//         img.src = img.dataset.src;
//         observer.unobserve(img);
//       }
//     });
//   }, options);

//   lazyImages.forEach(img => {
//     observer.observe(img);
//   });
// });

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index(props) {
  const {
    store,
    assets,
    storeid,
    categoryListData,
    footercopyrighttext,
    title,
    social,
    showFooter,
    setshowFooter,
  } = props;
  const [pageinit, setPageInit] = useState(false);
  const [showFormLoader, setFormLoader] = useState(false);
  // const [categoryListData, setCategoryListData] = useState({});
  const [count, setCount] = useState(1);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    console.log("***");
  }, [count]);

  const getcartCount = () => {
    // return cartinfoData.cartcount;
    return cartinfoData.cartcount;
  };

  if (!pageinit) {
    setPageInit(true);
    meta.title = title;
    setUserData(getUserdata());
    console.log(categoryListData);
    setCount((count) => (count = count + 1));
  }




  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <div style={{ overflow: "hidden" }}>
          <section >
            <Suspense>
              <NavbarMain storeid={storeid} />
            </Suspense>
          </section>
          <Suspense>
            <HomeSlider></HomeSlider>
          </Suspense>
          <Suspense>
            <HomepageFooter storeid={storeid} footercopyrighttext={footercopyrighttext} />

          </Suspense>
        </div>
      </>
    </React.Fragment>
  );
}
