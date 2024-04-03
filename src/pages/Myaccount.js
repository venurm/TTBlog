import React, { useCallback, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {

  handleGetCartInfoStorageItems,
} from "../utilities/cartManager";
import "./customstyle.css";
import PulseLoader from "react-spinners/PulseLoader";
import { getUserdata } from "../utilities/sessionexpiry";
import NavbarMain from "./navbarmain";
import Footer from "./footer";


const meta = {
  title: "My Wallet",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Myaccount(props) {
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




  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className="relative" >
          <NavbarMain storeid={storeid} />

        </section>
        <div style={{ overflow: 'hidden' }} className="pt-8 mt-8 pt-md-0 mt-md-0">
          <section className="py-4 testing-1 pt-8 mt-8    bg-white container-y pt-5 mt-5" >
            <div className="container mx-auto px-4 ">
              <h2 className=" text-3xl font-bold font-heading pb-4">My Account </h2>

              <div className="container myacc-con pt-5 pb-3">
                <div className=" ">
                  <h4><a href="/orderdetails">My Orders <i
                    style={{ paddingTop: "5px" }}
                    className="icon_next"
                  /></a></h4>
                  <p>View, modify and track orders</p>
                </div>
                <hr />
                <div className=" ">
                  <h4>My Payments <i style={{ paddingTop: "5px" }}
                    className="icon_next" /></h4>
                  <p>View and modify payment methods</p>
                </div>
                <hr />
                <div className=" ">
                  <h4><a href="/mywallet">My Wallet <i style={{ paddingTop: "5px" }}
                    className="icon_next" /></a></h4>
                  <p>Tamiltshirts Wallet History and redeemed gift cards</p>
                </div>
                <hr />
                <div className=" ">
                  <h4>My Address <i style={{ paddingTop: "5px" }}
                    className="icon_next" /></h4>
                  <p>Edit, add or remove addresses</p>
                </div>
                <hr />
                <div className=" ">
                  <h4><a href="/myprofile">My Profile <i style={{ paddingTop: "5px" }}
                    className="icon_next" /></a></h4>
                  <p>Edit personal info, change password</p>
                </div>
                <hr />

              </div>
              <hr className="hariline mb-5"></hr>
              <div className="myacc-con container ">
                <div className="  " style={{ border: 'none' }}>
                  <h4 className="">Refer and Earn<i style={{ paddingTop: "5px" }}
                    className="icon_next" /></h4>
                  <p>
                    Invite your friends and earn rewards</p>
                </div>
              </div>

            </div>
            <div className=" pt-5 myacc-ban  ">
              <div className="" >
                <p>Buy something to get personalised recommendations.</p>
                <a href="/">Continue Shopping</a>
              </div>
              <img className="img img-fluid" src="https://images.bewakoof.com/web/empty-account-1530180452.png"></img>
            </div>
          </section>

        </div>
        <Footer storeid={storeid} footercopyrighttext={footercopyrighttext} />
      </>
    </React.Fragment >
  );
}