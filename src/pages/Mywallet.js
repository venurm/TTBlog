import React, { useCallback, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {

  handleGetCartInfoStorageItems,
} from "../utilities/cartManager";

import "./customstyle.css";
import PulseLoader from "react-spinners/PulseLoader";
import { getUserdata } from "../utilities/sessionexpiry";
import Footer from "./footer";
import NavbarMain from "./navbarmain";


const meta = {
  title: "My Wallet",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Mywallet(props) {
  const {
    store,
    description,
    assets,
    storeid,
    hdimage,
    productimage,
    productviewimage,
    thumbnailviewimage,
    pageRefresh,
    footercopyrighttext,
    showFooter,
    setshowFooter,
  } = props;

  const [walletEmpty, setWalletEmpty] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setWalletEmpty(false);
    }, 1000);
  }, []);


  const [showMessage, setShowMessage] = useState(false);
  const [showMessage1, setShowMessage1] = useState(false);
  const [rotateIcon1, setRotateIcon1] = useState(false);
  const [rotateIcon, setRotateIcon] = useState(false);

  const handleClick = () => {
    setShowMessage(!showMessage);
    setRotateIcon(!rotateIcon);
  };
  const handleClick1 = () => {
    setShowMessage1(!showMessage1);
    setRotateIcon1(!rotateIcon1);
  };
 
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className="relative" >
          <NavbarMain storeid={storeid}/>

        </section>
<section className="d-flex justify-content-center">
        <div style={{ overflow: 'hidden' }} className="pt-3 mt-5 pt-md-0 mt-md-0  ">
          {walletEmpty ? (
            <section className="py-4 testing-1 bg-white container-y pt-5 mt-5">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold font-heading pb-4">My Wallet</h2>
                <div className="container">
                  <center>
                    <p>Oh no! Looks like your wallet is empty :(</p>
                    <p className="pt-4">
                      <b className="pt-4">Start earning credits now!</b>
                    </p>
                    <img src="https://images.bewakoof.com/web/discounts-and-offers-1604329877.gif" alt="Empty wallet"></img>
                    <p>Invite your friends to shop on Bewakoof and</p>
                    <p>
                      <b>win credits worth Rs. 100 on every referral</b>
                    </p>
                    <button style={{ backgroundColor: "#629A28" }} className="mt-2 md:mt-2 text-white font-bold font-heading py-2 px-12 rounded-md mb-2 uppercase">
                      Send Invite
                    </button><br></br>
                    <span style={{ fontSize: '13px' }}>Copy your referral code</span>
                    <div className="ref-code mt-2">CEAKBHPC</div>
                  </center>
                </div>
              </div>
            </section>
          ) : ( 
            <div className="pt-10 mt-5 container ">
              <h2 className="text-xl  font-bold font-heading ps-5 pb-4">My Wallet</h2>
              <div className="wall-header mb-2 "> <div className="container ">
                <p><b>₹777</b></p>
                <p>Total Wallet Amount</p> </div></div>
                <div className="container ">
          <div className="wallet-container mb-3">
            <div>
              <h4>Tamiltshirts Credit</h4>
              <p>Earned from referral, offers and cash-back. Limited validity. Can be redeemed on orders above ₹333</p>
            </div>
            <h4>Balance : ₹20.0</h4>
          </div>
          <div className="wallet-container mb-3">
            <div>
              <h4>Tamiltshirts Credit</h4>
              <p>Earned from referral, offers and cash-back. Limited validity. Can be redeemed on orders above ₹333</p>
            </div>
            <h4>Balance : ₹20.0</h4>
          </div>

          <div className="wallet-information mb-5">
            <h4 className=" " onClick={handleClick1}><a >How to use Tamiltshirts Wallet </a>  <i className={rotateIcon1 ? "icon_down" : "icon_next"} /></h4>
            {showMessage1 && (
        <div className="pt-3">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
        </div>
      )}
            <h4 className="mt-4" onClick={handleClick}>Help & Support  <i className={rotateIcon ? "icon_down" : "icon_next"} /></h4>
      {showMessage && (
        <div className="pt-3 ">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
        </div>
      )}
          </div>

      

        </div>

            </div>
            
          )}
          
        </div>

        </section> 

        <Footer storeid={storeid} footercopyrighttext={footercopyrighttext} />
      </>
    </React.Fragment>
  );
}