import { format } from "date-fns";
import {
  createCourseRequest,
  getCoursesRequst,
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
        imageId: 0,
        createdAt: format(courseData.createdAt, "yyyy-MM-dd"),
      };
      if (courseData.binaryImage) {
        const uploadFileId = await uploadFileRequest(courseData.binaryImage);
        dataWithFile.imageId = uploadFileId.fileId;
      }
      const data = await createCourseRequest(dataWithFile);
      dispatch(getCourses());
      notify(data.message);
      onClose();
    } catch (error) {
      notify(error.message, "error");
    }
  };
};
export const getCourses = () => {
  return async (dispatch) => {
    try {
      const data = await getCoursesRequst();
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
        createdAt: format(courseData.creationAt, "yyyy-MM-dd"),
        description: courseData.description,
      };
      if (courseData.binaryImage) {
        const formData = new FormData();
        formData.append("file", courseData.binaryImage);
        const uploadedFile = await uploadFileRequest(formData);
        dataWithFile.imageId = uploadedFile.fileId;
      }
      const data = await updateCourseRequest(courseId, dataWithFile);
      dispatch(getCourses());
      onClose();
      return notify(`${data.message}`);
    } catch (err) {
      console.log(err);
      notify("Something went wrong", "error");
    }
  };
};

export const deleteCourseAction = (courseId) => {
  return async () => {
    try {
      const data = await deleteCourseRequest(courseId);
      return data;
    } catch (e) {
      console.log(e);
    }
  };
};
