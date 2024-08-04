"use server";
import axios from "axios";
import { auth } from "../_lib/auth";

export const getAllCities = async () => {
  try {
    const { user } = await auth();
    const response = await axios.get(
      `${process.env.BASE_URL}/admin/api/cities`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    throw new Error("Cities Cannot be Loaded");
  }
};

export const getOneCity = async (cityId) => {
  try {
    const { user } = await auth();
    const response = await axios.get(
      `${process.env.BASE_URL}/admin/api/city/${cityId}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw new Error("City Cannot be Loaded");
  }
};

export const createCity = async (data) => {
  try {
    const { user } = await auth();
    const response = await axios.post(
      `${process.env.BASE_URL}/admin/api/cities`,
      data,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "multipart/form-data",
        },
      },
    );
    return response.data;
  } catch (error) {
    throw new Error("City create Fail please Try Again");
  }
};

export const updateCity = async (id, data) => {
  console.log("id:", id);
  try {
    const { user } = await auth();
    const response = await axios.patch(
      `${process.env.BASE_URL}/admin/api/cities/${id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "multipart/form-data",
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("ERROR", error.response?.data || error.message);
    throw new Error("City Update Failed. Please Try Again.");
  }
};

export const deleteCity = async (cityId, password) => {
  console.log("cityId:", cityId);
  try {
    const { user } = await auth();
    const response = await axios.delete(
      `${process.env.BASE_URL}/admin/api/delete-city/${cityId}`,
      password,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("ERROR", error.response?.data || error.message);
    throw new Error("City Delete Failed. Please Try Again.");
  }
};
