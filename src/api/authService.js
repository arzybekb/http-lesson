import { baseURL } from "../utils/constants/general";

export const loginRequest = async (userData) => {
  const response = await fetch(baseURL + "/auth/authenticate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error("Что-то пошло не так");
  }
  return response.json();
};
