import React from "react";
import backarrow from "../assets/arrow-left.svg";
import { useNavigate } from "react-router-dom";
import PathInputComponent from "../components/UploadComponentforQuantizationEdge";

const Quantization = () => {
  const navigate = useNavigate();
  const goToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <button className="absolute top-0 left-0 m-4" onClick={goToDashboard}>
        <img src={backarrow} alt="Back arrow" />
      </button>

      <PathInputComponent />
    </div>
  );
};

export default Quantization;
