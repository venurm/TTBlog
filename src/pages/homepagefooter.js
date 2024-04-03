import React, { useCallback, useEffect, useState } from "react";
import "./customstyle.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function HomepageFooter(props) {
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
                          href="#"
                        >
                          Investor Relations
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href="#"
                        >
                          Reward program
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href="#"
                        >
                          Delivery information
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href="#"
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
                          href="#"
                        >
                          Return an order
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href="#"
                        >
                          Search Terms
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href="#"
                        >
                          Advanced Search
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href="#"
                        >
                          Orders and Returns
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="text-gray-50 hover:text-gray-200"
                          href="#"
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
                      href="#"
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
            <div className="Footer-content text-light">
                <h2 className="text-xl text-white font-bold font-heading">
                  {" "}
                  TAMIL T-SHIRTS THE NEW AGE ONLINE SHOPPING EXPERIENCE.
                </h2>
                <p className="text-gray-50 hover:text-gray-200">
                  Tamiltshirts® is a lifestyle fashion brand committed to crafting
                  innovative and distinctive fashion for the trendy, contemporary
                  Indian. Our brand was born out of a dedication to making a
                  positive impact through innovation, honesty, and thoughtfulness.
                  We constantly strive to provide an altered and improved fashion
                  experience that goes beyond the ordinary, ensuring that our
                  creations resonate with your individuality and style. At
                  Tamiltshirts®, we believe in setting new standards and pushing
                  boundaries, offering you a fashion journey that is both
                  meaningful and unique.
                </p>
                <br></br>
                <p className="text-gray-50 hover:text-gray-200">
                  Empowering style since 2012, TAMIL T-SHIRTS® boasts a 400-member
                  strong team, with a remarkable track record of 2 million
                  products sold. Our unrestricted approach to experimentation
                  allows us to strike the perfect balance between creativity and
                  relatability, resulting in innovative designs that redefine
                  fashion. Always at the forefront of style, our product range is
                  consistently fresh and in-demand, with monthly sales exceeding 1
                  lakh products. Operating on a vertical integration model, we
                  manufacture our products in-house, eliminating middlemen to
                  offer high-quality fashion at affordable prices. Our commitment
                  extends beyond fashion to environmental and social
                  responsibility, encompassing practices like rainwater
                  harvesting, sustainable packaging, and employee benefits. At
                  TAMIL T-SHIRTS®, we not only keep up with the latest trends but
                  also set them. From our exclusive T-shirt collection to
                  personalized Tamil letter T-shirts, we provide an accessible,
                  affordable, and thoughtful online shopping experience tailored
                  for the Indian fashion enthusiast.
                </p>{" "}
                <br></br>
                <h2 className="text-xl text-white font-bold font-heading">
                  ONLINE SHOPPING AT TAMIL T-SHIRTS IS HASSLE-FREE, CONVENIENT AND
                  SUPER-EXCITING!
                </h2>
                <p className="text-gray-50 hover:text-gray-200">
                  Transforming the shopping experience, online shopping is now a
                  delightful journey right from the comfort of your home. Gone are
                  the days of planning trips to physical stores; today, you can
                  indulge in the excitement of online shopping with
                  tamiltshirt.com. Explore a world of amazing deals, discounts,
                  and a user-friendly interface that stands out among other online
                  shopping sites in India. With numerous shopping filters, we
                  ensure your experience is truly hassle-free. Welcome to
                  tamiltshirt.com, where convenience meets exceptional offers,
                  making online shopping a joyous affair in every click.
                </p>{" "}
                <br></br>
                <p className="text-gray-50 hover:text-gray-200">
                  Welcome to Tamiltshirts®, your ultimate destination for the
                  trendiest online fashion. Explore our curated collection of
                  fine, high-quality merchandise and embark on a delightful online
                  shopping experience for both men and women. Discover a diverse
                  range, from men's fashion to essential clothing items, as well
                  as a wide variety of women's wear and accessories. Simply fill
                  up your carts and enjoy swift home delivery for all orders.
                  Indulge in the latest fashion trends with Tamiltshirts®, where
                  style meets convenience. Our exciting categories, combined with
                  exclusive online shopping offers, create an irresistible and
                  uber cool combo for fashion enthusiasts. Whether you're shopping
                  for yourself or looking for the perfect gift, Tamiltshirts®
                  guarantees a smile on the faces of your near and dear ones.
                  Elevate your fashion journey with Tamiltshirts®, where every
                  click is a step towards style and satisfaction.
                </p>{" "}
                <br></br>
                <h2 className="text-xl text-white font-bold font-heading">
                  TAMILTSHIRT.COM: THE QUIRKIEST ONLINE SHOPPING SITES OF ALL!
                </h2>
                <p className="text-gray-50 hover:text-gray-200">
                  Experience the epitome of accessible online fashion with
                  Tamiltshirt.com. Dive into our latest collections featuring
                  Marvel t-shirts, including official Avengers and Captain America
                  merchandise. We specialize in creating personalized Tamil word
                  t-shirts and Tamil letter t-shirts, adding a unique touch to
                  your wardrobe. Discover the quirkiest t-shirts unavailable on
                  any other Indian online shopping site, exclusively showcased at
                  Tamiltshirt.com. If your wardrobe craves a stylish
                  transformation, Tamiltshirt.com stands as your top choice among
                  online shopping sites. Explore our diverse range, from trendy
                  sliders and joggers to cozy sweatshirts, fashionable bags, and
                  backpacks. At Tamiltshirt.com, fashion doesn't have to break the
                  bank. Say goodbye to expensive alternatives; here, you'll find
                  affordable and chic options to elevate your style.
                </p>
                <p className="text-gray-50 hover:text-gray-200">
                  What you wear is a reflection of your mood, and we've got the
                  quirky t-shirts that allow you to express yourself with
                  confidence. Take a journey through the latest runway trends on
                  our Tamiltshirt.com blog and become a trendsetter among your
                  peers. With us, you're not just shopping; you're defining your
                  style story. No tags, just seamless style and unbeatable
                  affordability, making Tamiltshirt.com your go-to destination for
                  a fashion-forward online experience.
                </p>
                <br></br>
                <h2 className="text-xl text-white font-bold font-heading">
                  DONT MISS OUT ON ACCESSORIES AVAILABLE ON OUR MULTI-FACETED
                  ONLINE STORE!{" "}
                </h2>{" "}
                <p className="text-gray-50 hover:text-gray-200">
                  Explore beyond the ordinary in online fashion with
                  Tamiltshirt.com, where we don't just provide thrilling clothing
                  options but also offer an array of fabulous accessories,
                  featuring exceptionally cool bags and backpacks. Our collection
                  is designed for those who appreciate compactness, hassle-free
                  functionality, and the ease of storing essentials. Carry your
                  belongings with an added touch of swag, thanks to our stylish
                  designs.
                </p>{" "}
                <br></br>
                <p className="text-gray-50 hover:text-gray-200">
                  At Tamiltshirt.com, we believe in ensuring that our accessories
                  section is just as captivating as our clothing line. Immerse
                  yourself in the world of cool designs that effortlessly
                  complement your style. Our bags and backpacks are not just
                  accessories; they are a statement. With Tamiltshirt.com, step
                  into a realm where online fashion seamlessly combines
                  practicality, style, and a touch of swag, ensuring you never
                  compromise on individuality and convenience. <br></br>
                  As for our accessories collection, they are also manufactured
                  with impeccable quality materials. Our mobile covers are made
                  from hard and durable polycarbonate, with a matte finish that
                  will make for a great protection for your phone with the rough
                  use that we put them through nowadays.{" "}
                </p>{" "}
                <br></br>
                <h2 className="text-xl text-white font-bold font-heading">
                  TAMILTSHIRT.COM: THE UBER COOL ONLINE FASHION STORE FOR THE
                  YOUTH
                </h2>
                <p className="text-gray-50 hover:text-gray-200">
                  {" "}
                  At tamiltshirt.com, we offer everything you need to elevate your
                  cool quotient. Our extensive range includes plus-size clothing,
                  casual shirts for men, and accessories for everyone. We bring
                  forth a diverse array of choices, consolidating the best options
                  that the online shopping platform in India has to offer under
                  one umbrella. Explore a vast selection of men's t-shirts,
                  joggers, sliders, Henley shirts, Polo t-shirts, Oxford pants,
                  and more to curate a stunning ensemble. Our goal is to cater to
                  all kinds of customers by understanding their needs and
                  preferences. Communication is the cornerstone of our operation.
                  Welcome to your Tamiltshirts® Online Fashion Shop! Don't miss
                  out on our attractive daily online shopping offers. Express your
                  style effortlessly with our wide range of apparels just a click
                  away. Make a statement with our premium t-shirts online—more
                  style, more value. Get more, pay less! Your fashion journey
                  begins here.
                </p>{" "}
                <br></br>
                <h2 className="text-xl text-white font-bold font-heading">
                  OUR PHILOSOPHY
                </h2>
                <p className="text-gray-50 hover:text-gray-200">
                  At Tamiltshirts®, our mission is to craft fashion that not only
                  aligns with the latest local and global trends but also provides
                  functional value for your money. We prioritize quality
                  materials, ensuring comfortable and flattering prints that make
                  you stand out. We delve into the minds of our customers, drawing
                  inspiration from their conversations and experiences to create
                  graphics that resonate and relate. Constant and consistent
                  innovation is at our core, offering our fans nothing short of
                  the best at affordable rates. Unlike many, we don't outsource
                  manufacturing; from design conception to production and styling,
                  everything happens in-house. We're vertically integrated,
                  bringing fashion directly from us to your doorstep without
                  middlemen, ensuring reliability and building trust with our
                  fans. Environmental impact is a concern, and we're actively
                  implementing initiatives, such as optimizing processes to use
                  only what we need from nature, rainwater harvesting, and
                  recycling water from our RO facility. At Tamiltshirts®, our
                  spirit is about making an impact by breaking conventions and
                  offering a different perspective!
                </p>{" "}
                <br></br>
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
                  width="auto"
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
