import React, { useEffect, useState } from "react";
import "./CheckoutPage.css";
import { Link, useParams } from "react-router-dom";
import { getRedirectURL } from "../components/Tools/Axios";

export const CheckoutPage = () => {
  const  { courseId } = useParams();
  const [encData, setEncData] = useState("");
  const [course, setCourse] = useState({});
  async function getData() {
    let res = await getRedirectURL(courseId);

    setEncData(res.data.encData);
    setCourse(res.data.course);
    
  }

  useEffect(() => {
    getData();
  },[])
  return (
      <div className="checkout-box">
      <div className="checkout-container">
        <div className="checkout-details">
          <p className="checkout-heading">Checkout</p>
          <p className="course-heading">Course Details</p>
          <div>
            <div>Course Name:</div>
            <div>{ course.name}</div>
          </div>
          <div>
            <div>Course Fees:</div>
            <div>{course.fees}</div>
          </div>
        </div>
        <form action="https://securepay.sabpaisa.in/SabPaisa/sabPaisaInit?v=1" method="POST">
          <input type="hidden" name="encData" value={encData } /> 
        <input type="hidden" name="clientCode" value="SAKU97"/ > 
        <input type="submit" value="Proceed to Pay" className="btn btn-success"/>
        </form>
      </div>
    </div>
  )
};
