import React from "react";
import "../styles/RegistrationPage.scss";
import RegistrationLeftComponent from "../components/Registration/RegistrationLeftComponent.jsx";
import RegistrationRightComponent from "../components/Registration/RegistrationRightComponent.jsx";

const RegistrationPage = ({ children, ...props }) => {
  return (
    <div className="main">
      <RegistrationLeftComponent></RegistrationLeftComponent>
      <RegistrationRightComponent></RegistrationRightComponent>
    </div>
  );
};

export default RegistrationPage;
