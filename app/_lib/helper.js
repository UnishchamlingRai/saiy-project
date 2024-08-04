"use client";
let u;
export const getUser = () => {
  u = localStorage.getItem("user");
};

export const user = u;
