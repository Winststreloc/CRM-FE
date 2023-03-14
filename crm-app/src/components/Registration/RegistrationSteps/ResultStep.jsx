import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ResultStep = () => {
  const formData = useSelector((state) => state.regData);
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <>
      <div className="right-block" />
      <div className="right">
        <div className="right_title">
          <p className="right_title_text">Result</p>
        </div>
        <div className="right_inputs">
          <div className="right_inputs_input">{formData.firstName}</div>
          <div className="right_inputs_input">{formData.secondName}</div>
          <div className="right_inputs_input">{formData.email}</div>
          <div className="right_inputs_input">{formData.password}</div>
          <div className="right_inputs_input">{formData.country}</div>
          <div className="right_inputs_input">{formData.male}</div>
        </div>
      </div>
    </>
  );
};

export default ResultStep;
