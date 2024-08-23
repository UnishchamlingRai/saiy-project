"use server";

import {
  create,
  deleteWithOutPassword,
  getAll,
  getOne,
  update,
} from "./CURDfactory";

export const getAllCoupons = async () => {
  return await getAll("/admin/api/coupons");
};

export const getOneCoupon = async (id) => {
  return await getOne(`/admin/api/coupons/${id}`);
};

export const createCoupon = async (data) => {
  return await create("/admin/api/coupons", data);
};

export const updateCoupon = async (id, data) => {
  console.log("data:", data);
  return await update(`/admin/api/coupons/${id}`, data);
};

export const deleteCoupon = async (id) => {
  return await deleteWithOutPassword(`/admin/api/coupons/${id}`);
};
