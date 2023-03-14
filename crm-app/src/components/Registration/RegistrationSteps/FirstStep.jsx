import React, { useState } from "react";
import "../../../styles/RegistrationRightComponent.scss";
import { useDispatch, useSelector } from "react-redux";
import { addRegData, registerSelector } from "../../../redux/reducers/Register";

const FirstStep = (props) => {
  const dispatch = useDispatch();
  const { regData } = useSelector(registerSelector);
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    email: "",
    number: "",
    password: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    dispatch(addRegData(formData));
    props.onButtonClick();
    console.log(formData);
  };
  return (
    <>
      <div className="right-block" />
      <div className="right">
        <form onSubmit={nextStep}>
          <div className="right_title">
            <p className="right_title_text">Basic Information</p>
          </div>
          <div className="right_inputs">
            <input
              className="right_inputs_input"
              placeholder="First Name"
              name="firstName"
              onChange={handleInputChange}
            ></input>
            <input
              className="right_inputs_input"
              placeholder="Second Name"
              name="secondName"
              onChange={handleInputChange}
            ></input>
            <input
              className="right_inputs_input"
              placeholder="Email"
              name="email"
              onChange={handleInputChange}
            ></input>
            <input
              className="right_inputs_input"
              placeholder="Number"
              // pattern="[0-9]{8}"
              name="number"
              onChange={handleInputChange}
            ></input>
            <input
              className="right_inputs_input"
              placeholder="Password"
              type="password"
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="right_buttons">
            <button className="right_buttons_button">
              <p className="right_buttons_button_text">NEXT</p>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FirstStep;
