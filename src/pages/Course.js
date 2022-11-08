import { styled } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Button from "../components/UI/Button/Button";
import CourseCard from "../components/UI/CourseCard.js/CourseCard";
import useEnqueueSnackbar from "../components/UI/SnackBar/useEnqueueSnackbar";
import { deleteCourseAction, getCourses } from "../store/course/courseActions";
import AddCourse from "./AddCourse/AddCourse";
import EditCourse from "./AddCourse/EditCourse";

function Course() {
  const dispatch = useDispatch();
  const notify = useEnqueueSnackbar();
  const { courses } = useSelector((state) => state.courses);
  const [params, setParams] = useSearchParams();
  const { addCourse, editCourse } = Object.fromEntries([...params]);

  const createCourseModal = () => {
    setParams({ addCourse: true });
  };

  const closeModal = () => {
    setParams({});
  };

  useEffect(() => {
    dispatch(getCourses());
  }, []);

  const openEditCourse = (courseId) => {
    setParams({ editCourse: true, courseId });
  };
  const submitDelete = (courseId) => {
    dispatch(deleteCourseAction(courseId, notify));
  };

  return (
    <>
      <Header>
        <h1>Курсы</h1>
        <Button onClick={createCourseModal} variant="contained">
          Добавить курс
        </Button>
      </Header>
      <CardWrap>
        {courses.map((course) => {
          return (
            <CourseCard
              key={course.id}
              image={course.image}
              date={course.dateOfStart}
              courseName={course.courseName}
              openEditCourse={() => openEditCourse(course.id)}
              submitDelete={() => submitDelete(course.id)}
              description={course.description}
            />
          );
        })}
      </CardWrap>
      <AddCourse open={addCourse === "true"} onClose={closeModal} />
      {editCourse === "true" && (
        <EditCourse courseId={params.get("courseId")} onClose={closeModal} />
      )}
    </>
  );
}

export default Course;
const Header = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;
const CardWrap = styled("div")`
  padding: 15px 0px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
`;
