import React from "react";
import "./ReturnPolicy.css";
import { Gap } from "../Tools/Gap";
import { CustomHeader } from "../Tools/CustomHeader";
import { Footer } from "../Footer/Footer";
import { MoveToTop } from "../Tools/MoveToTop";

export const ReturnPolicy = () => {
  return (
    <>
      <Gap />
      <CustomHeader props={{ title: "Refund and Cancellation policy" }} />
      <div>
        <ul className="privacy_list">
          <li>NUMBER CHANGE, DISCOUNTS & REFUND POLICY :</li>
          <li className="no_style">
            Thanks for shopping at Dainik School. If you are not entirely
            satisfied with your purchase, we’re here to help.
          </li>
          <li className="no_style">Number Change :</li>
          <li>
            If you have purchased two courses on the same number, then you have
            7 calendar days to make a request for a number change. Request after
            7 days from the date of purchase for a change in number or transfer
            of course to another number will not be considered.
          </li>
          <li>
            If you have purchased one course then the number changes or
            transfers of course to another number requests shall not be
            considered.
          </li>
          <li>Discounts :</li>
          <li className="no_style">
            Dainik School Digital Pvt. Ltd. Reserves the right to suspend or
            terminate any offers/discounts or alter the terms and conditions
            stated herein at any time without prior notice. The Price on the
            Store may or may not reflect the price after the discount. Offers
            cannot be combined for additional discounts.
          </li>
          <li id="refund-policy">Returns :</li>
          <li className="no_style"></li>
          You have 24 hours to return an e-course from the date you purchased
          it. A Refund Request will be deemed valid only if it is made through
          an email to dainikschool@gmail.com within 24 hours of purchase. No
          Refund requests would be entertained after 24 hours from the date of
          purchase.
          <li>Refunds :</li>
          <li className="no_style">
            If your return is approved, we will initiate a refund to your
            original method of payment. You will receive the credit within a
            certain amount of days (minimum 5-7 working days), depending on your
            card issuer’s policies.
          </li>
          <li>Banking Charges :</li>
          <li className="no_style">
            You will be responsible for paying for your own banking charges for
            returning your e- course. Banking costs are nonrefundable. If you
            receive a refund, the cost of banking will be deducted from your
            refund.
          </li>
          <li>Contact Us :</li>
          <li className="no_style">
            Dainik School Digital Pvt. Ltd. Add – VPO Tokas district Hisar
            Haryana pin 125004 For further assistance please contact us at
            dainikschool@gmail.com
          </li>
        </ul>
      </div>
      <Footer />
      <MoveToTop />
    </>
  );
};
