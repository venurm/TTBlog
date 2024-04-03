import React, { useCallback, useEffect, useState } from "react";
import "./customstyle.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Footer(props) {
  const {
    storeid,
    footercopyrighttext,
  } = props;
  return (
    <React.Fragment>

      <>
      <section className={"inline-block py-4 bg-blue-300 footerStyle"}>
          <div className="container mx-auto px-2">
            <div className="flex flex-wrap -mx-4 pb-6 lg:pb-6 border-b border-gray-400">
              <div className="w-full lg:w-3/5 px-4 mb-6">
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-10 lg:mb-0">
                    <h3 className="mb-2 text-xl font-bold font-heading text-white">
                      Information
                    </h3>
                    <ul>
                      <li className="mb-2">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href="privacypolicy"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href="termsandconditions"
                        >
                          Terms And Condtions
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href="shippingandrefundpolicy"
                        >
                          Shipping And Refund Policy
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href={() => {
                            return false;
                          }}
                        >
                          Investor Relations
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href={() => {
                            return false;
                          }}
                        >
                          Reward program
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href={() => {
                            return false;
                          }}
                        >
                          Delivery information
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href={() => {
                            return false;
                          }}
                        >
                          Paying by invoice
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-10 lg:mb-0">
                    <h3 className="mb-2 text-xl font-bold font-heading text-white">
                      Customer Service
                    </h3>
                    <ul>
                      <li className="mb-2">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href={() => {
                            return false;
                          }}
                        >
                          Return an order
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href={() => {
                            return false;
                          }}
                        >
                          Search Terms
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href={() => {
                            return false;
                          }}
                        >
                          Advanced Search
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href={() => {
                            return false;
                          }}
                        >
                          Orders and Returns
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href={() => {
                            return false;
                          }}
                        >
                          FAQs
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href="/storelocation"
                        >
                          Store Location
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href="/contactus"
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                    <h3 className="mb-2 text-xl text-white font-bold font-heading">
                      Contact Us
                    </h3>
                    <ul>
                      <li className="mb-2">
                        <h4 className="mb-2 text-gray-50">Mobile</h4>
                        <a
                          className="text-white hover:underline"
                         href="tel:+919551789459"
                        >
                          +91 95 517 89459
                        </a>
                      </li>
                      <li className="mb-2">
                        <h4 className="mb-2 text-gray-50">Email</h4>
                        <a
                          className="text-white hover:underline"
                     href="mailto:contact@tamiltshirts.com"
                        >
                          contact@tamiltshirts.com
                        </a>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-2/5 px-4 order-first lg:order-1 mb-2">
                <h3 className="mb-2 text-xl text-white font-bold font-heading">
                  Join our Newsletter
                </h3>
                <p className="mb-2 text-xl text-yellow-500 font-bold font-heading">
                  News, sales:
                </p>
                <div className="mb-2 relative lg:max-w-xl lg:mx-auto bg-white rounded-lg">
                  <div className="relative flex flex-wrap items-center justify-between">
                    <div className="relative flex-1">
                      {/* <span className="absolute top-0 left-0 ml-8 mt-4 font-semibold font-heading text-xs text-gray-400">
                      Drop your e-mail
                    </span> */}
                      <input
                        className="inline-block w-full px-8 placeholder-gray-900 border-0 focus:ring-transparent focus:outline-none rounded-md"
                        type="text"
                        placeholder="Drop your e-mail"
                      />
                    </div>
                    <a
                      className="inline-block w-auto bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-2 px-8 rounded-md uppercase text-center"
                      href={()=>{return false}}
                    >
                      Join
                    </a>
                  </div>
                </div>

              </div>
              <div className="w-full px-4 flex flex-wrap justify-between lg:order-last">
                <div className="w-full md:w-auto mb-4 md:mb-0 flex flex-wrap">
                <LazyLoadImage
                    className="mr-4 mb-2"
                    src="/yofte-assets/brands/visa.svg"
                    alt="visa brand"
                  />
                  <LazyLoadImage
                    className="mr-4 mb-2"
                    src="/yofte-assets/brands/paypal.svg"
                    alt="paypal brand"
                  />
                  <LazyLoadImage
                    className="mb-2"
                    src="/yofte-assets/brands/mastercard.svg"
                    alt="mastercard brand"
                  />
                </div>
                <div className="w-full md:w-auto flex">
                  <a
                    className="inline-flex items-center justify-center w-12 h-12 mr-2 rounded-full"
                    href="https://www.facebook.com/tamiltshirts.in/" target="_blank" aria-label="Visit our Facebook Page"
                  >
                    <LazyLoadImage
                      src="/yofte-assets/buttons/facebook-white-circle.svg"
                      alt="facebook" 
                    />
                  </a>
                  <a
                    className="inline-flex items-center justify-center w-12 h-12 mr-2 rounded-full"
                    href="https://www.instagram.com/tamiltshirts.in/" target="_blank" aria-label="Visit our instagram Page"
                  >
                    <LazyLoadImage
                      src="/yofte-assets/buttons/instagram-circle.svg"
                      alt="instagram" 
                    />
                  </a>
                  <a
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full"
                    href="https://twitter.com/tamiltshirts" target="_blank" aria-label="Visit our twitter Page"
                  >
                    <LazyLoadImage
                      src="/yofte-assets/buttons/twitter-circle.svg"
                      alt="twitter" 
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 flex items-center justify-center">
              <a
                className="inline-block mr-4 text-white text-2xl font-bold font-heading"
                href="/" aria-label="Visit Tamiltshirts - Your Ultimate Destination for Tamil-themed Apparel"
              >
                <LazyLoadImage
                  className="h-7"
                  src={`https://assetsvilva.blr1.cdn.digitaloceanspaces.com/store/${storeid}/logo.webp`}
                  alt="Tamiltshirts Logo"
                />
              </a>
              <p className="inline-block text-sm text-gray-200">
                {footercopyrighttext}
              </p>
            </div>
          </div>
        </section>

     

      </>
    </React.Fragment>
  );
}
