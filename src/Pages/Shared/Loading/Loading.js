import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="flex justify-center items-center space-x-2"></div>
      <div></div>{" "}
      <div
        className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600"
        role="status"
      >
      </div>
    </div>
  );
};

export default Loading;
