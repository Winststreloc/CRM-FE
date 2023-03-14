import React, { useEffect, useState } from "react";
import "../../styles/RegistrationRightComponent.scss";
import { useDispatch } from "react-redux";

import { setNumber } from "../../redux/reducers/Register";
import FirstStep from "./RegistrationSteps/FirstStep";
import SecondStep from "./RegistrationSteps/SecondStep";
import ResultStep from "./RegistrationSteps/ResultStep";

function RegistrationRightComponent() {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);

  const nextStep = () => {
    // console.log(step);
    setStep(step + 1);
    if (step === 3) {
      setStep(1);
    }
    dispatch(setNumber(step));
  };

  useEffect(() => {
    console.log(step);
    dispatch(setNumber(step));
  }, [step]);

  return (
    <>
      {step === 1 ? (
        <FirstStep onButtonClick={nextStep} />
      ) : step === 2 ? (
        <SecondStep onButtonClick={nextStep} />
      ) : step === 3 ? (
        <ResultStep />
      ) : (
        <div>pizdec</div>
      )}
    </>
  );
}

export default RegistrationRightComponent;
