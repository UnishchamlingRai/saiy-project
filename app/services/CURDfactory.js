"use server";
import { auth } from "../_lib/auth";

export async function getAll(endpoint) {
  const { user } = await auth();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch data from ${endpoint}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(`Data Cannot be Loaded from ${endpoint}`);
  }
}

export async function getOne(endpoint) {
  const { user } = await auth();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data from ${endpoint}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(`Data Cannot be Loaded from ${endpoint}`);
  }
}

export async function create(endpoint, data) {
  try {
    const { user } = await auth();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      body: data,
    });
    console.log("res:", res);

    if (!res.ok) {
      throw new Error(`Failed to create data at ${endpoint}`);
    }

    const responseData = await res.json();
    return responseData;
  } catch (error) {
    console.log("error:", error);
    throw new Error(`Creation failed at ${endpoint}. Please try again.`);
  }
}

export async function update(endpoint, data) {
  try {
    const { user } = await auth();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
      method: "POST", // If the API requires PUT or PATCH for updates, change this method accordingly
      headers: {
        Authorization: `Bearer ${user.token}`,

        // Do not set 'Content-Type' when using FormData
      },
      body: data, // 'data' should be an instance of FormData
    });

    // console.log("res:", res);

    if (!res.ok) {
      throw new Error(`Failed to update data at ${endpoint}`);
    }
    const responseData = await res.json();
    return responseData;
  } catch (error) {
    console.log("error:", error);
    throw new Error(`Update failed at ${endpoint}. Please try again.`);
  }
}

export async function deleteByPassword(endpoint, password) {
  try {
    const { user } = await auth();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ password }),
    });

    const response = await res.json();
    return response;
  } catch (error) {
    throw new Error(`Delete failed at ${endpoint}. Please try again.`);
  }
}
export async function deleteWithOutPassword(endpoint) {
  try {
    const { user } = await auth();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const response = await res.json();
    return response;
  } catch (error) {
    throw new Error(`Delete failed at ${endpoint}. Please try again.`);
  }
}
