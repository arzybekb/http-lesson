import { baseURL } from "../utils/constants/general";

export const uploadFileRequest = async (file) => {
  const response = await fetch(baseURL + "/static/upload", {
    method: "POST",
    body: file,
  });
  if (!response.ok) {
    throw new Error("Не удалось загрузить файл");
  }
  return response.json();
};
