import React from "react";
import "./Discount.css";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import CloseIcon from '@material-ui/icons/Close';
function Discount({ trigger, setTrigger }) {
  return trigger ? (
    <div className="discount">
      <div className="discount-inner">
        <div className="discount-content-1">
          <h1>Thank You For Being</h1>
          <h1>Our Customer...</h1>
        </div>
        <div className="discount-content">
          <div className="content-heading">
            <h1>Get 40% off</h1>
            <h5>Here's your coupon code - but hurry! Ends 20/08</h5>
          </div>
          <div className="promo">
          <div className="code">
          <LoyaltyIcon />
            <h2>AWESOME 40</h2>
          </div>
            <p>
              Please redeem this coupon code on any product before august 20 to
              receive an instant 40% off at checkout.
            </p>
          </div>
        </div>
        <button
          className="close-btn"
          onClick={() => {
            setTrigger(false);
          }}
        >
        <CloseIcon />
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Discount;
