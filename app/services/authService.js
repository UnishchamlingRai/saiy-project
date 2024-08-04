// src/app/services/authService.js

export async function login(data) {
  const res = await fetch(`${process.env.BASE_URL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await res.json();
}
