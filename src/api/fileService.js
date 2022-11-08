import formDataInstance from "../config/formDataInstance";

export const uploadFileRequest = (file) => {
  return formDataInstance.post("/static", file);
};
