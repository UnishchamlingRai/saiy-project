"use server";
import axios from "axios";
import { auth } from "../_lib/auth";

export const getAllCities = async () => {
  const { user } = await auth();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/api/cities`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    },
  );
  const data = await response.json();
  return data;
};

export const getOneCity = async (cityId) => {
  try {
    const { user } = await auth();
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/api/city/${cityId}`,
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
    if (!user || !user.token) {
      throw new Error("User authentication failed");
    }

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/api/cities`,
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
    if (error.response) {
      console.error("API Error:", error.response.data);
    } else {
      console.error("ERROR:", error.message);
    }
    throw new Error("City creation failed. Please try again.");
  }
};
export const updateCity = async (id, data) => {
  console.log("data:", data);
  try {
    const { user } = await auth();
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/api/cities/${id}`,
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
    console.error("ERROR", error);
    throw new Error("City Update Failed. Please Try Again.");
  }
};

export const deleteCity = async (cityId, password) => {
  console.log("cityId:", cityId);
  try {
    const { user } = await auth();
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/api/delete-city/${cityId}`,
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
