// components/Sidebar.js
import React from "react";
import tensorflowlogo from "../assets/TensorflowLogo.svg";
import pytorchlogo from "../assets/PyTorchLogo.svg";
import myprofilelogo from "../assets/MyProfileLogo.svg";
import terminallogo from "../assets/terminal-square.svg";
// You can use heroicons for icons

const NavigationBar = () => {
  return (
    <div className="h-screen w-16 flex flex-col items-center bg-gray-900 text-white">
      <div className="flex-1 flex flex-col items-center justify-center gap-y-2">
        <button className="p-2 rounded hover:bg-gray-700">
          <img src={tensorflowlogo} alt="TensorFlow Logo" className="w-6" />
        </button>
        <button className="p-2 rounded hover:bg-gray-700">
          <img src={pytorchlogo} alt="PyTorch Logo" className="w-6" />
        </button>
        <button className="p-2 rounded hover:bg-gray-700"></button>
      </div>
      <div className="h-16 flex items-center justify-center flex-col mb-5 gap-y-2">
        <button className="p-2 rounded hover:bg-gray-700">
          <img src={myprofilelogo} alt="My Profile Logo" className="w-6" />{" "}
        </button>
        <button className="p-2 rounded hover:bg-gray-700">
          <img src={terminallogo} alt="My Profile Logo" className="w-8" />{" "}
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
