import React from "react";
import Sidebar from "./Sidebar";

const Wrapper = ({ children }) => {
  return (
    <div className="flex h-screen flex-row overflow-y-scroll">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-gray-100 p-4">{children}</main>
    </div>
  );
};

export default Wrapper;
