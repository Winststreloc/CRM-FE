import React from "react";
import HeaderComponent from "./HeaderComponent";
import "../styles/MainComponent.scss";

function MainComponent({ children }) {
  return (
    <div className="main">
      <div className="main_header">
        <HeaderComponent></HeaderComponent>
      </div>
      {/* <div className="main_left_container">
        <LeftContainer></LeftContainer>
      </div>
      <div className="main_container">
        <MainContainer></MainContainer>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div> */}
    </div>
  );
}

export default MainComponent;
