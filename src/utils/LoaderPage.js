import React from "react";

const LoaderPage = () => {
  return (
    <div className="my-6 flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <div className=" w-10 h-10 md:w-16 md:h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

        <p className="mt-4 text-xl font-medium text-white">
          Fetching, please wait...
        </p>
      </div>
    </div>
  );
};

export default LoaderPage;
