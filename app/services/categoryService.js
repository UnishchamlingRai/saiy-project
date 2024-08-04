"use server";
import axios from "axios";
import { auth } from "../_lib/auth";

export async function getAllCategories() {
  const { user } = await auth();
  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/admin/api/category`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    throw new Error("Categories Cannot be Loaded");
  }
}

export async function getOneCategory(id) {
  const { user } = await auth();
  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/admin/api/category/${id}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw new Error("Category Cannot be Loaded");
  }
}

export async function createCategory(data) {
  try {
    const { user } = await auth();
    const response = await axios.post(
      `${process.env.BASE_URL}/admin/api/category`,
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
    throw new Error("Category creation failed. Please try again.");
  }
}

export async function updateCategory(id, data) {
  console.log("data:", data);
  try {
    const { user } = await auth();
    const response = await axios.put(
      `${process.env.BASE_URL}/admin/api/category/${id}`,
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
    throw new Error("Category update failed. Please try again.");
  }
}

export async function deleteCategory(id, password) {
  console.log("id:", id);
  console.log("pass:", password);
  try {
    const { user } = await auth();
    const res = await fetch(
      `${process.env.BASE_URL}/admin/api/delete-category/${id}`,
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
    console.log("REs:", response);
    return response.data;
  } catch (error) {
    throw new Error("Category delete failed. Please try again.");
  }
}
