import React from "react";
import backarrow from "../assets/arrow-left.svg";
import { useNavigate } from "react-router-dom";
import iithlogowhite from "../assets/iithlogowhite.png";
import PathInputComponentForOnlyEdge from "../components/UploadComponentforEdge";

const EdgeInference = () => {
  const navigate = useNavigate();
  const goToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <div className="flex justify-center items-center absolute">
        <div className="">
          <a href="https://www.iith.ac.in/">
            <img src={iithlogowhite} alt="" className="w-[200px] m-8" />
          </a>
        </div>
      </div>
      <button className="absolute top-0 left-0 m-4" onClick={goToDashboard}>
        <img src={backarrow} alt="Back arrow" />
      </button>

      <PathInputComponentForOnlyEdge />
    </div>
  );
};

export default EdgeInference;
