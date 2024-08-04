import React from "react";
import Sidebar from "./Sidebar";

const Wrapper = ({ children }) => {
  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-4 bg-gray-100">{children}</main>
    </div>
  );
};

export default Wrapper;
