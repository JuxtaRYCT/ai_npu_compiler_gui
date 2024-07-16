// import React from "react";
// import NavigationBar from "../components/NavigationBar";
// import { useNavigate } from "react-router-dom";
// import backarrow from "../assets/arrow-left.svg";
// import iithlogowhite from "../assets/iithlogowhite.png";

// const Home = () => {
//   const navigate = useNavigate();

//   const goToQuantization = () => {
//     navigate("/quantize");
//   };
//   const goToNetworkAdaption = () => {
//     navigate("/networkadapt");
//   };
//   const goToEdgeInference = () => {
//     navigate("/edgeinference");
//   };

//   return (
//     <div className="">
//       <div className="flex justify-center items-center relative">
//         <div className="">
//           <a href="https://www.iith.ac.in/">
//             <img src={iithlogowhite} alt="" className="w-[200px] m-8" />
//           </a>
//         </div>
//       </div>
//       <div className="absolute top-0 bottom-0">
//         <NavigationBar />
//       </div>

//       <div className="flex h-screen items-center justify-center">
//         <div className="flex flex-col gap-4 items-center justify-center">
//           <button
//             type="submit"
//             className="relative flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-[400px] rounded-full"
//             onClick={goToQuantization}
//           >
//             Quantization
//           </button>
//           <button
//             type="submit"
//             className="relative flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-[400px] rounded-full"
//             onClick={goToNetworkAdaption}
//           >
//             Network Adaptation
//           </button>
//           <button
//             type="submit"
//             className="relative flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-[400px] rounded-full"
//             onClick={goToEdgeInference}
//           >
//             Edge Inference
//           </button>
//           <button
//             type="submit"
//             className="relative flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-[400px] rounded-full"
//             onClick={goToEdgeInference}
//           >
//             Visualise .h5 model file
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import NavigationBar from "../components/NavigationBar";
import { useNavigate } from "react-router-dom";
import backarrow from "../assets/arrow-left.svg";
import iithlogowhite from "../assets/iithlogowhite.png";

const Home = () => {
  const navigate = useNavigate();

  const goToQuantization = () => {
    navigate("/quantize");
  };
  const goToNetworkAdaption = () => {
    navigate("/networkadapt");
  };
  const goToEdgeInference = () => {
    navigate("/edgeinference");
  };

  const goToVisualiser = () => {
    navigate("/visualise");
  };

  return (
    <div className="">
      <div className="flex justify-center items-center relative">
        <div className="">
          <a href="https://www.iith.ac.in/">
            <img src={iithlogowhite} alt="" className="w-[200px] m-8" />
          </a>
        </div>
      </div>
      <div className="absolute top-0 bottom-0">
        <NavigationBar />
      </div>

      <div className="flex h-screen items-center justify-center">
        <div className="grid grid-cols-2 gap-4 p-4">
          <button
            type="button"
            className="flex justify-center items-center h-32 text-lg font-medium text-gray-50 bg-indigo-600 border-2 border-dashed border-gray-400 hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-full"
            onClick={goToQuantization}
          >
            Quantization+Edge Inference
          </button>
          <button
            type="button"
            className="flex justify-center items-center h-32 text-lg font-medium text-gray-50 bg-indigo-600 border-2 border-dashed border-gray-400 hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-full"
            onClick={goToNetworkAdaption}
          >
            Network Adaptation
          </button>
          <button
            type="button"
            className="flex justify-center items-center h-32 text-lg font-medium text-gray-50 bg-indigo-600 border-2 border-dashed border-gray-400 hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-full"
            onClick={goToEdgeInference}
          >
            Edge Inference
          </button>
          <button
            type="button"
            className="flex justify-center items-center h-32 text-lg font-medium text-gray-50 bg-indigo-600 border-2 border-dashed border-gray-400 hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-full w-[300px]"
            onClick={goToVisualiser}
          >
            Visualise .h5 model file
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
