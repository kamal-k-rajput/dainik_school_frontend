import React from "react";
import "./ReturnPolicy.css";
import { Gap } from "../Tools/Gap";
import { CustomHeader } from "../Tools/CustomHeader";

export const ReturnPolicy = () => {
  return (
    <div>
      <Gap />
      <CustomHeader title={{ props: "Return Policy" }} />
      <table>
        <tbody>
          <li>Returns :</li>
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
        </tbody>
      </table>
    </div>
  );
};
