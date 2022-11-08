import React, { useEffect, useState } from "react";
import Modal from "../../components/UI/Modal/Modal";

import { useDispatch } from "react-redux";
import useEnqueueSnackbar from "../../components/UI/SnackBar/useEnqueueSnackbar";
import { getCourseById, updateCourse } from "../../store/course/courseActions";
import CourseForm from "../../components/CourseForm";

function EditCourse({ courseId, onClose }) {
  const dispatch = useDispatch();
  const notify = useEnqueueSnackbar();
  const [singleCourseData, setSingleCourseData] = useState(null);

  const setFormValues = (course) => {

    setSingleCourseData({
      courseName: course.courseName,
      description: course.description,
      creationAt: new Date(course.creationAt),
      imageId: course.imageLink,
    });
  };

  const submitFormHandler = (courseData) => {
    dispatch(updateCourse(courseData, courseId, notify, onClose));
  };

  useEffect(() => {
    const getSingleCourse = async () => {
      const course = await dispatch(getCourseById(courseId, notify));
      setFormValues(course);
    };
    getSingleCourse();
  }, []);
  return (
    <Modal
      title="Редактировать курс"
      open={!!singleCourseData}
      onClose={onClose}
    >
      <CourseForm
        onClose={onClose}
        initValues={singleCourseData}
        onSubmit={submitFormHandler}
        setSingleCourseData={setSingleCourseData}
      />
    </Modal>
  );
}

export default EditCourse;
