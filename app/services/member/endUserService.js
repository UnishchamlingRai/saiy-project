"use server";
import { auth } from "@/app/_lib/auth";
import axios from "axios";

export const getAllEndUsers = async () => {
  const { user } = await auth();
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/api/enduser`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      },
    );
    if (response.data.error) throw new Error(response.data.error);
    return response.data;
  } catch (error) {
    throw new Error("End Users Cannot be Loaded");
  }
};

export const getOneEndUser = async (id) => {
  const { user } = await auth();
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/api/enduser/${id}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      },
    );
    if (response.data.error) throw new Error(response.data.error);
    return response.data;
  } catch (error) {
    throw new Error("End User Cannot be Loaded");
  }
};

export const updateEndUser = async (id, data) => {
  const { user } = await auth();
  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/api/enduser/${id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      },
    );
    if (response.data.error) throw new Error(response.data.error);
    return response.data;
  } catch (error) {
    throw new Error("End User Update Failed. Please Try Again");
  }
};

export const deleteEndUser = async (id, password) => {
  try {
    const { user } = await auth();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/api/delete-enduser/${id}`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ password }),
      },
    );

    const response = await res.json();
    return response;
  } catch (error) {
    throw new Error("End User delete failed. Please try again.");
  }
};

export const createEndUser = async (data) => {
  const { user } = await auth();

  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/api/enduser`,
    data,
    {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    },
  );
  if (response.data.error) throw new Error(response.data.error);
  return response.data;
};
