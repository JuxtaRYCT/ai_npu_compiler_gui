import React, { useState, DragEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

function Visualisation() {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const goToNetron = () => {
    navigate("/layers");
  };
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className={`border-2 border-dashed border-gray-400 p-8 rounded-xl h-[600px] w-[1000px] bg-gray-900 flex flex-col items-center justify-center ${
          dragActive ? "border-indigo-500" : ""
        }`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="file-upload"
          className="hidden"
          onChange={handleChange}
        />
        <label
          htmlFor="file-upload"
          className="flex flex-col items-center justify-center cursor-pointer"
        >
          <p className="text-gray-500 text-2xl mb-4">
            Drag and drop your file here or click to choose file
          </p>
        </label>
        {file && (
          <p className="mt-4 text-gray-600">Selected file: {file.name}</p>
        )}
        <button
          className="text-white mt-4 bg-indigo-600 w-[200px] rounded-full border-dashed border-white"
          onClick={goToNetron}
        >
          Proceed
        </button>
      </div>
    </div>
  );
}

export default Visualisation;
