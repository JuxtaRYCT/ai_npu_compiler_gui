import React, { useState, DragEvent, ChangeEvent } from "react";

function UploadComponent() {
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
            Drag and drop your file here or
          </p>
          <button
            type="button"
            className="px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-full"
          >
            Choose file
          </button>
        </label>
        {file && (
          <p className="mt-4 text-gray-600">Selected file: {file.name}</p>
        )}
      </div>
    </div>
  );
}

export default UploadComponent;
