// import React, { useState, ChangeEvent } from "react";

// function PathInputComponent() {
//   const [folderPath, setFolderPath] = useState<string>("");
//   const [tflitePath, setTflitePath] = useState<string>("");

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setFolderPath(e.target.value);
//   };

//   const handlePathSubmit = async () => {
//     const response = await fetch("http://127.0.0.1:5000/convert", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ model_path: folderPath }),
//     });

//     const result = await response.json();

//     if (response.ok) {
//       setTflitePath(result.tflite_model_path);
//     } else {
//       console.error(result.error);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="border-2 border-dashed border-indigo-600 p-8 rounded-lg h-auto w-[600px] bg-gray-900 flex flex-col items-center justify-center">
//         <input
//           type="text"
//           value={folderPath}
//           onChange={handleInputChange}
//           placeholder="Enter the path to your folder"
//           className="p-2 w-full text-black"
//         />
//         <button
//           onClick={handlePathSubmit}
//           className="mt-4 px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-full"
//         >
//           Convert Model
//         </button>
//         {tflitePath && (
//           <p className="mt-4 text-gray-600">
//             Converted TFLite Model Path: {tflitePath}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default PathInputComponent;

import React, { useState, ChangeEvent } from "react";

const PathInputComponent: React.FC = () => {
  const [folderPath, setFolderPath] = useState<string>("");
  const [tflitePath, setTflitePath] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFolderPath(e.target.value);
  };

  const handlePathSubmit = async () => {
    setError(null);
    try {
      const response = await fetch("http://127.0.0.1:5000/convert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ model_path: folderPath }),
      });

      const result = await response.json();

      if (response.ok) {
        setTflitePath(result.tflite_model_path);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border-2 border-dashed border-indigo-600 p-8 rounded-lg h-auto w-[600px] bg-gray-900 flex flex-col items-center justify-center">
        <input
          type="text"
          value={folderPath}
          onChange={handleInputChange}
          placeholder="Enter the path to your folder"
          className="p-2 w-full text-black"
        />
        <button
          onClick={handlePathSubmit}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-full"
        >
          Convert Model
        </button>
        {tflitePath && (
          <p className="mt-4 text-gray-600">
            Converted TFLite Model Path: {tflitePath}
          </p>
        )}
        {error && <p className="mt-4 text-red-600">Error: {error}</p>}
      </div>
    </div>
  );
};

export default PathInputComponent;
