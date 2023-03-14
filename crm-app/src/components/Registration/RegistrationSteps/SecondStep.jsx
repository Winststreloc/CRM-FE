import React, { useEffect, useState } from "react";
import "../../../styles/RegistrationRightComponent.scss";
import { useDispatch, useSelector } from "react-redux";
import { addRegData, registerSelector } from "../../../redux/reducers/Register";
// import { addRegData } from "../../../redux/reducers/Register";

const SecondStep = (props) => {
  const dispatch = useDispatch();
  const { regData } = useSelector(registerSelector);
  const [country, setCountry] = useState("");
  const [male, setMale] = useState("");

  const [formData, setFormData] = useState({
    country: "",
    male: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // setFormData({ ...regData, [name]: value });
  };

  const nextStep = () => {
    dispatch(addRegData({ ...regData, country, male }));
    // dispatch(addRegData(country))
    props.onButtonClick();
  };
  return (
    <>
      <div className="right-block" />
      <div className="right">
        <form onSubmit={nextStep}>
          <div className="right_title">
            <p className="right_title_text">NEBASIC Information</p>
          </div>
          <div className="right_inputs">
            <input
              className="right_inputs_input"
              placeholder="Country"
              name="country"
              // value={country}
              onChange={(e) => setCountry(e.target.value)}
            ></input>
            <input
              className="right_inputs_input"
              placeholder="Male"
              name="male"
              // value={male}
              onChange={(e) => setMale(e.target.value)}
            ></input>
          </div>
          <div className="right_buttons">
            <button className="right_buttons_button">
              <p className="right_buttons_button_text">RESULT</p>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SecondStep;
