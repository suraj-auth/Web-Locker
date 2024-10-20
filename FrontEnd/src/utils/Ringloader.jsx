import React from "react";

function Rloader() {
  return (
    <div className="h-14 m-auto w-48 flex items-center justify-center gap-3 bg-blue-600 rounded-xl">
      <div className="animate-spin border-4 border-slate-400 border-t-white rounded-full h-6 w-6"></div>
      <h1 className="text-white text-xl font-medium">Processing...</h1>
    </div>
  );
}

export default Rloader;
