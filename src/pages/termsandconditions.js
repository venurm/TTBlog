import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LazyImage from "react-lazy-blur-image";
import InfiniteScroll from "react-infinite-scroll-component";
import { PiCurrencyInr } from "react-icons/pi";
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import {
  handleCartMinus,
  handleCartPlus,
  handleFetchCategoryData,
  handleFetchColorCodesData,
  handleFetchProductsColorCodesData,
  handleFetchProductsData,
  handleFetchProductsDataSliced,
  handleFetchProductsSizeData,
  handleFetchSizeData,
  handleFetchVersionManagerData,
  handleGetCartInfoStorageItems,
} from "../utilities/cartManager";
import "./customstyle.css";
import { getUserdata } from "../utilities/sessionexpiry";
import {
  handleGetCategoryInfoStorageItems,
  handleGetColorCodeStorageItems,
  handleGetProductsColorCodesStorageItems,
  handleGetProductsInfoStorageItems,
  handleGetProductsSizeStorageItems,
  handleGetSizeStorageItems,
  handleGetVersionManagerStorageItems,
  handleSetCategoryInfoStorageItems,
  handleSetVersionManagerStorageItems,
} from "../utilities/storageManager";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import MultiRangeSlider from "multi-range-slider-react";
import { useNavigate, useParams } from "react-router-dom";
import { AK } from "../constants/AppKeys";
import { callStores } from "../utilities/storeManager";
import { checkerArray, checkerString } from "../utilities/checker";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { lowercasenosp } from "../utilities/checker";
import NavbarMain from "./navbarmain";
import Footer from "./footer";
const meta = {
  title: "Terms And Conditions",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function TermsAndCondtions(props) {
  const {
    store,
    description,
    assets,
    storeid,
    hdimage,
    productimage,
    productviewimage,
    thumbnailviewimage,
    assetsUrl,
    categoryListData,
    userData,
    versionmanagerListData,
    colorcodesListData,
    productscolorcodesListData,
    sizeListData,
    productssizeListData,
    productsListData,
    cartinfoData,
    setCartInfoData,
    count,
    setCount,
    pageRefresh,
    footercopyrighttext,
    showFooter,
    setshowFooter,
  } = props;

  const [pageinit, setPageInit] = useState(false);
  const [showFormLoader, setFormLoader] = useState(false);
  const [producthasMore, setProductHasMore] = useState(true);
  const params = useParams();
  const [productsListPageData, setProductsListPageData] = useState([]);
  const [productsListDisplayData, setProductsListDisplayData] = useState([]);
  const [sizeListDisplayData, setSizeListDisplayData] = useState([]);
  const [colorListDisplayData, setColorListDisplayData] = useState([]);
  const [productsListDisplayDataCount, setProductsListDisplayDataCount] =
    useState(20);
  const [
    productsListIncreaseDisplayDataCount,
    setProductsListIncreaseDisplayDataCount,
  ] = useState(20);
  const [mobileFilterTab, setmobileFilterTab] = useState("sizes");

  const [availableData, setAvailabeData] = useState({
    colorcodes: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
    size: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
    products: [
      { id: 110 },
      { id: 111 },
      { id: 112 },
      { id: 113 },
      { id: 114 },
      { id: 115 },
      { id: 116 },
      { id: 117 },
      { id: 118 },
      { id: 119 },
      { id: 120 },
      { id: 121 },
      { id: 122 },
      { id: 123 },
      { id: 124 },
      { id: 125 },
      { id: 126 },
      { id: 127 },
      { id: 128 },
      { id: 129 },
    ],
  });
  const [rangeData, setRangeData] = useState({
    min: 5,
    max: 10,
  });
  const [rangeData1, setRangeData1] = useState(0);
  const [incr, setIncr] = useState(0);
  const [minValue, set_minValue] = useState(300);
  const [maxValue, set_maxValue] = useState(600);
  const handleInputSlider = async (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
    if (e.minValue != minValue) await filterProductByCategoryChecks();
    if (e.maxValue != maxValue) await filterProductByCategoryChecks();
  };
  const navigate = useNavigate();

  useEffect(() => {
    console.log("***");
  }, [cartinfoData.cartcount, cartinfoData, cartinfoData.products]);

  useEffect(() => {
    console.log("***");
  }, [count]);

  const getcartCount = () => {
    return cartinfoData.cartcount;
  };
  if (!pageinit) {
    setPageInit(true);
    pageRefresh();
  }
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className="relative">
        <NavbarMain storeid={storeid} />
         
        </section>

        <section className="py-4 testing-1 bg-white container-y">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-3 mb-2">
              <div>
                <>
                  <br />
                  <>
                    <h3>Terms and Condition</h3>
                    <br />
                    <b>
                      Please read the following terms and conditions very
                      carefully as your use of service is subject to your
                      acceptance of and compliance with the following terms and
                      conditions ("Terms").
                    </b>
                    <br />
                    <br />
                    <p>
                      By subscribing to or using any of our services you agree
                      that you have read, understood and are bound by the Terms,
                      regardless of how you subscribe to or use the services. If
                      you do not want to be bound by the Terms, you must not
                      subscribe to or use our services.
                    </p>
                    <br />
                    <p>
                      In these Terms, references to "you", "User" shall mean the
                      end user accessing the Website, its contents and using the
                      Services offered through the Website, "Service Providers"
                      mean independent third party service providers, and "we",
                      "us" and "our" shall mean VilvaNetworks and its
                      affiliates.
                    </p>
                    <br />
                    <b>Introduction:</b>
                    <br />
                    <p>
                      a) www.tamiltshirts.in website ("Website") is an Internet
                      based content and e-commerce portal owned and operated by
                      VilvaNetworks, a firm registered under the laws of India.
                    </p>
                    <p>
                      b) Use of the Website is offered to you conditioned on
                      acceptance without modification of all the terms,
                      conditions and notices contained in these Terms, as may be
                      posted on the Website from time to time. VilvaNetworks at
                      its sole discretion reserves the right not to accept a
                      User from registering on the Website without assigning any
                      reason thereof.
                    </p>
                    <br />
                    <b>User Account, Password, and Security:</b>
                    <br />
                    <p>
                      You upon completing the Website's registration process
                      through your facebook account or through our native
                      registration process, are responsible for maintaining the
                      confidentiality of the password and account, and are fully
                      responsible for all activities that occur under your
                      password or account. You agree to (a)immediately notify us
                      of any unauthorized use of your password or account or any
                      other breach of security, and (b) ensure that you access
                      your account at your secure environment. Vilvaclothing.in
                      cannot and will not be liable for any loss or damage
                      arising from your failure to comply with this.
                    </p>
                    <br />
                    <b>Services Offered:</b>
                    <p>
                      VilvaNetwork provides a number of Internet-based services
                      through the Web Site (all such services, collectively, the
                      "Service"). One such service enables users to purchase
                      original merchandise such as clothing, footwear and
                      accessories from various fashion and lifestyle brands.
                      (collectively, "Products"). Upon placing order,
                      AdyarHandiCrafts shall ship the product to you and be
                      entitled to its payment for the Services.
                    </p>
                    <br />
                    <b>Intellectual Property Rights:</b>
                    <p>
                      a) Unless otherwise indicated or anything contained to the
                      contrary or any proprietary material owned by a third
                      party and so expressly mentioned, VilvaNetworks owns all
                      Intellectual Property Rights to and into the Website,
                      including, without limitation, any and all rights, title
                      and interest in and to copyright, related rights, patents,
                      utility models, trademarks, trade names, service marks,
                      designs, know-how, trade secrets and inventions (whether
                      patentable or not), goodwill, source code, meta tags,
                      databases, text, content, graphics, icons, and hyperlinks.
                      You acknowledge and agree that you shall not use,
                      reproduce or distribute any content from the Website
                      belonging to tamiltshirts.in without obtaining
                      authorization from VilvaNetworks.
                    </p>
                    <p>
                      b) Notwithstanding the foregoing, it is expressly
                      clarified that you will retain ownership and shall solely
                      be responsible for any content that you provide or upload
                      when using any Service, including any text, data,
                      information, images, photographs, music, sound, video or
                      any other material which you may upload, transmit or store
                      when making use of our various Service. However, with
                      regard to the product customization Service (as against
                      other Services like blogs and forums) you expressly agree
                      that by uploading and posting content on to the Website
                      for public viewing and reproduction/use of your content by
                      third party users, you accept the User whereby you grant a
                      non-exclusive license for the use of the same.
                    </p>
                    <br />
                    <b>Links To Third Party Sites:</b>
                    <p>
                      The Website may contain links to other websites ("Linked
                      Sites").The Linked Sites are not under the control of
                      VilvaNetworks or the Website www.tamiltshirts.in is not
                      responsible for the contents of any Linked Site, including
                      without limitation any link contained in a Linked Site, or
                      any changes or updates to a Linked Site. VilvaNetworks is
                      not responsible for any form of transmission, whatsoever,
                      received by you from any Linked Site. tamiltshirts.in is
                      providing these links to you only as a convenience, and
                      the inclusion of any link does not imply endorsement by
                      VilvaNetworks or the Website of the Linked Sites or any
                      association with its operators or owners including the
                      legal heirs or assigns thereof. The users are requested to
                      verify the accuracy of all information on their own before
                      undertaking any reliance on such information.
                    </p>
                    <br />
                    <b>Disclaimer Of Warranties/Limitation Of Liability:</b>
                    <p>
                      VilvaNetworks has endeavoured to ensure that all the
                      information on the Website is correct, but neither
                      warrants nor makes any representations regarding the
                      quality, accuracy or completeness of any data,
                      information, product or Service. In no event shall
                      VilvaNetworks be liable for any direct, indirect,
                      punitive, incidental, special, consequential damages or
                      any other damages resulting from: (a) the use or the
                      inability to use the Services; (b) unauthorized access to
                      or alteration of the user's transmissions or data; (c) any
                      other matter relating to the services; including, without
                      limitation, damages for loss of use, data or profits,
                      arising out of or in any way connected with the use or
                      performance of the Website or Service. Neither shall
                      VilvaNetworks be responsible for the delay or inability to
                      use the Website or related services, the provision of or
                      failure to provide Services, or for any information,
                      software, products, services and related graphics obtained
                      through the Website, or otherwise arising out of the use
                      of the website, whether based on contract, tort,
                      negligence, strict liability or otherwise. Further,
                      VilvaNetworks shall not be held responsible for
                      non-availability of the Website during periodic
                      maintenance operations or any unplanned suspension of
                      access to the website that may occur due to technical
                      reasons or for any reason beyond VilvaNetworks control.
                      The user understands and agrees that any material and/or
                      data downloaded or otherwise obtained through the Website
                      is done entirely at their own discretion and risk and they
                      will be solely responsible for any damage to their
                      computer systems or loss of data that results from the
                      download of such material and/or data.
                    </p>
                    <br />
                    <b>Indemnification:</b>
                    <p>
                      You agree to indemnify, defend and hold harmless from and
                      against any and all losses, liabilities, claims, damages,
                      costs and expenses (including legal fees and disbursements
                      in connection therewith and interest chargeable thereon)
                      asserted against or incurred by tamiltshirts.in that arise
                      out of, result from, or may be payable by virtue of, any
                      breach or non-performance of any representation, warranty,
                      covenant or agreement made or obligation to be performed
                      by you pursuant to these Terms.
                    </p>
                    <br />
                    <b>Pricing:</b>
                    <p>
                      Prices for products are described on our Website and are
                      incorporated into these Terms by reference. All prices are
                      in Indian rupees. Prices, products and Services may change
                      at our own discretion.
                    </p>
                    <br />
                    <b>Shipping:</b>
                    <p>
                      Title and risk of loss for all products ordered by you
                      shall pass on to you upon our shipment to the shipping
                      carrier.
                    </p>
                    <br />
                    <b>Termination:</b>
                    <p>
                      a) VilvaNetworks may suspend or terminate your use of the
                      Website or any Service if it believes, in its sole and
                      absolute discretion that you have breached a term of these
                      Terms.
                    </p>
                    <p>
                      b) You shall be liable to pay for any Service or product
                      that you have already ordered till the time of Termination
                      by either party whatsoever. Further, you shall be entitled
                      to your royalty payments as per the User License Agreement
                      that has or is legally deemed accrued to you.
                    </p>
                    <br />
                    <b>Governing Law:</b>
                    <p>
                      These terms shall be governed by and constructed in
                      accordance with the laws of India without reference to
                      conflict of laws principles and disputes arising in
                      relation hereto shall be subject to the exclusive
                      jurisdiction of the courts at Chennai only.
                    </p>
                    <br />
                    <b>Headings:</b>
                    <p>
                      The headings and subheadings herein are included for
                      convenience and identification only and are not intended
                      to describe, interpret, define or limit the scope, extent
                      or intent of the Terms or the right to use the Website by
                      you contained herein or any other section or pages of the
                      Website or any Linked Sites in any manner whatsoever.
                    </p>
                    <br />
                    <b>Interpretation Of Number And Genders:</b>
                    <p>
                      The Terms herein shall apply equally to both the singular
                      and plural form of the terms defined. Whenever the context
                      may require, any pronoun shall include the corresponding
                      masculine and feminine. The words "include", "includes"
                      and "including" shall be deemed to be followed by the
                      phrase "without limitation". Unless the context otherwise
                      requires, the terms "herein", "hereof", "hereto",
                      "hereunder" and words of similar import refer to the Terms
                      as a whole.
                    </p>
                    <br />
                    <b>Severability:</b>
                    <p>
                      If any provision of the Terms is determined to be invalid
                      or unenforceable in whole or in part, such invalidity or
                      unenforceability shall attach only to such provision or
                      part of such provision and the remaining part of such
                      provision and all other provisions of these Terms shall
                      continue to be in full force and effect.
                    </p>
                    <br />
                    <b>Report Abuse:</b>
                    <p>
                      As per these Terms, users are solely responsible for every
                      material or content uploaded on to the Website.
                      VilvaNetworks does not review the contents in any way
                      before they appear on the Website. VilvaNetworks does not
                      verify, endorse or otherwise vouch for the contents of any
                      user or any content generally posted or uploaded on to the
                      Website. Users can be held legally liable for their
                      contents and may be held legally accountable if their
                      contents or material include, for example, defamatory
                      comments or material protected by copyright, trademark,
                      etc. If you come across any abuse or violation of these
                      Terms, please report to{" "}
                      <a
                        href="/cdn-cgi/l/email-protection"
                        className="__cf_email__"
                        data-cfemail="fd9e8ebd9c99849c8f959c9399949e8f9c9b898ed39e9290"
                      >
                        [email&nbsp;protected]
                      </a>
                      .
                    </p>
                    <br />
                  </>
                </>
              </div>
            </div>
          </div>
        </section>

      
         <Footer storeid={storeid} footercopyrighttext={footercopyrighttext}/>
      </>
    </React.Fragment>
  );
}
