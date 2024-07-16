import React from "react";
import { useNavigate } from "react-router-dom";
import backarrow from "../assets/arrow-left.svg";

const Netron = () => {
  const navigate = useNavigate();
  const goToDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <div>
      <button className="absolute top-0 left-0 m-4" onClick={goToDashboard}>
        <img src={backarrow} alt="Back arrow" />
      </button>
      <div className="text-white text-center">Dataset Visualistion</div>
      <iframe src="https://netron.app/" className="w-full h-[800px]"></iframe>
    </div>
  );
};

export default Netron;
