import { baseURL } from "../utils/constants/general";
import store from "../store";

const {
  user: { accessToken },
} = store.getState();

export const createCourseRequest = async (courseData) => {
  const response = await fetch(baseURL + "/courses/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(courseData),
  });
  if (!response.ok) {
    throw new Error("Что-то пошло не так");
  }
  return response.json();
};

export const getCoursesRequst = async () => {
  console.log();
  const response = await fetch(baseURL + "/courses", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!response.ok) {
    throw new Error("Не удалось получить курсы");
  }
  return response.json();
};
export const getCourseByIdRequst = async (id) => {
  const response = await fetch(baseURL + `/courses/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!response.ok) {
    throw new Error("Не удалось получить курс");
  }
  return response.json();
};
export const updateCourseRequest = async (courseId, courseData) => {
  const response = await fetch(baseURL + `/courses/update/${courseId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(courseData),
  });
  if (!response.ok) {
    throw new Error("Не удалось обновить курс");
  }
  return response.json();
};

export const deleteCourseRequest = async (id) => {
  const response = await fetch(baseURL + `/courses/delete/${id}`, {
     method:'DELETE',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (!response.ok) {
    throw new Error("Не удалось удалить курс");
  }
  return response.json();
};
