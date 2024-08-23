"use server";
import axios from "axios";
import { auth } from "../_lib/auth";

export async function getAllneighborhoodForOneCity(cityid) {
  const { user } = await auth();
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/api/neighborhood/${cityid}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      },
    );
    // console.log("response:", response);
    return response.data;
  } catch (error) {
    throw new Error("Neighborhood Cannot be Loaded");
  }
}

export async function createNeighborhood(data) {
  try {
    const { user } = await auth();
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/api/neighborhood`,
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
    throw new Error("Neighborhood creation failed. Please try again.");
  }
}
export async function deleteNeighborhood(id) {
  try {
    const { user } = await auth();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/api/neighborhood/${id}`,
      {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      },
    );
    const response = await res.json();
    return response;
  } catch (error) {
    console.log(error);
    // throw new Error("Neighborhood delete failed. Please try again.");
  }
}
