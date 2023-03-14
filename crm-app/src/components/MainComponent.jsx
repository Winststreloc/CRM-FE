import React from "react";
import HeaderComponent from "./HeaderComponent";

function MainComponent({ children }) {
  return (
    <div className="main">
      <div className="main_header">
        <HeaderComponent></HeaderComponent>
      </div>
      <div className="main_container">
        {/* <MainContainer></MainContainer> */}
      </div>
    </div>
  );
}

export default MainComponent;
