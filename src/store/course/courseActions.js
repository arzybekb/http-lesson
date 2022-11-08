import {
  createCourseRequest,
  getCoursesRequest,
  getCourseByIdRequst,
  updateCourseRequest,
  deleteCourseRequest,
} from "../../api/courseService";
import { uploadFileRequest } from "../../api/fileService";
import { courseActions } from "./courseSlice";

export const createCourse = (courseData, onClose, notify) => {
  return async (dispatch) => {
    try {
      const dataWithFile = {
        courseName: courseData.courseName,
        description: courseData.description,
        image: "https://cdn.betterttv.net/emote/5de76fe0f6e95977b50e6875/3x",
        dateOfStart: courseData.createdAt,
      };
      console.log(dataWithFile);
      if (courseData.binaryImage) {
        const { data } = await uploadFileRequest(courseData.binaryImage);
        dataWithFile.image = data.link;
      }
      await createCourseRequest(dataWithFile);
      dispatch(getCourses());
      notify("Курс успешно добавлен!");
      onClose();
    } catch (error) {
      notify(error.message, "error");
    }
  };
};
export const getCourses = () => {
  return async (dispatch) => {
    try {
      const { data } = await getCoursesRequest();
      dispatch(courseActions.setCourse(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCourseById = (courseId, notify) => {
  return async () => {
    try {
      const data = await getCourseByIdRequst(courseId);
      console.log(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  };
};

export const updateCourse = (courseData, courseId, notify, onClose) => {
  console.log(courseData);
  return async (dispatch) => {
    try {
      const dataWithFile = {
        imageId: 0,
        courseName: courseData.courseName,
        createdAt: courseData.creationAt,
        description: courseData.description,
      };
      if (courseData.binaryImage) {
        const formData = new FormData();
        formData.append("file", courseData.binaryImage);
        const uploadedFile = await uploadFileRequest(formData);
        dataWithFile.imageId = uploadedFile.fileId;
      }
      const { data } = await updateCourseRequest(courseId, dataWithFile);
      dispatch(getCourses());
      onClose();
      return notify(`${data.message}`);
    } catch (err) {
      console.log(err);
      notify("Something went wrong", "error");
    }
  };
};

export const deleteCourseAction = (courseId, notify) => {
  return async (dispatch) => {
    try {
      const data = await deleteCourseRequest(courseId);
      console.log(data);
      notify("Успешно удалён!");
      dispatch(getCourses());
      return data;
    } catch (e) {
      console.log(e);
    }
  };
};
