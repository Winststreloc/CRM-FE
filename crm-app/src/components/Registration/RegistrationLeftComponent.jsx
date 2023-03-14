import React, { useEffect, useState } from "react";
import logo from "../../img/logo.png";
import "../../styles/RegistrationLeftComponent.scss";
import line from "../../img/progressLine.svg";
import { useSelector } from "react-redux";

function RegistrationMainComponent() {
  let step = useSelector((state) => state.number);
  const opacityForElement = (index) => {
    return index <= step ? 1 : 0.26;
  };

  return (
    <>
      <div className="left-block" />
      <div className="left-inner">
        <div className="left-inner_upper">
          <img src={logo} className="left-inner_upper_img" alt="logo" />
        </div>
        <div className="left-inner_lower">
          <div
            style={{ opacity: opacityForElement(1) }}
            className="left-inner_lower_block"
          >
            <img
              src={line}
              className="left-inner_lower_block_line"
              alt="progressLine"
            />
            <div className="left-inner_lower_block_text">Basic information</div>
            <div className="left-inner_lower_block_number">1</div>
          </div>
          <div
            style={{ opacity: opacityForElement(2) }}
            className="left-inner_lower_block"
          >
            <img
              src={line}
              className="left-inner_lower_block_line"
              alt="progressLine"
            ></img>
            <div className="left-inner_lower_block_text">
              Additional information
            </div>
            <div className="left-inner_lower_block_number">2</div>
          </div>
          <div
            style={{ opacity: opacityForElement(3) }}
            className="left-inner_lower_block"
          >
            <img
              src={line}
              className="left-inner_lower_block_line"
              alt="progressLine"
            ></img>
            <div className="left-inner_lower_block_text">Result</div>
            <div className="left-inner_lower_block_number">3</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistrationMainComponent;
