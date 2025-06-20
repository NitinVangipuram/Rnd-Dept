// src/pages/DocPage.jsx
import React from "react";

const Message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-start px-4 py-8">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-6 md:p-10">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">
          A Message from Dean
        </h1>
        <div className="relative w-full h-[60vh] md:h-[80vh]">
          <iframe
            title="Google Doc"
            src="https://docs.google.com/document/d/1erNNTzZQF3MTEzao2Sr2hRA7wp_HwohI9Ah9yiAzjPU/preview"
            className="absolute top-0 left-0 w-full h-full border border-gray-300 rounded-lg"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Message;
