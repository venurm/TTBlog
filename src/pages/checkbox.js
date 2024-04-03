
import React, { useState } from 'react';
import "./customstyle.css";

function CheckBoxPage(props) {
    const {
        userData,
        cartinfoData,
      } = props;

    const [walletbalance, setWalletbalance] = useState(0);
    const [isChecked, setIsChecked] = useState(false);
    function handleCheckboxChange() {
        setIsChecked(prevChecked => !prevChecked); 
        if (!isChecked) {
          setWalletbalance(userData?.wallet - cartinfoData.total);
        } else {
          setWalletbalance(0);
        }
      }

  return (
    <div style={{
      display: userData === null ? "none" : "flex"}} className="walletbalanceMSG2  justify-content-between">
    <p className="walletbalanceMSG3 d-flex pt-1">
    <input type="checkbox" id="myCheckbox" onChange={handleCheckboxChange} checked={isChecked} />
      <label for="myCheckbox"></label>&nbsp;&nbsp;Use Tamiltshirts Cash (₹{userData?.wallet})</p> <b className="mt-1"><span >Balance : {isNaN(walletbalance) ? 0 : walletbalance}</span></b></div>
  );
}

export default CheckBoxPage;