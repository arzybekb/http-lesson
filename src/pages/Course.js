import { styled } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Button from "../components/UI/Button/Button";
import { deleteCourseAction, getCourses } from "../store/course/courseActions";
import AddCourse from "./AddCourse/AddCourse";
import EditCourse from "./AddCourse/EditCourse";

function Course() {
  const dispatch = useDispatch();
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
  const sumbitDelete = (courseId) => {
    dispatch(deleteCourseAction(courseId));
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
            <div key={course.id}>
              <img width="200px" src={course.imageLink} alt="img" />
              <p>{course.courseName}</p>
              <p onClick={() => openEditCourse(course.id)}>edit</p>
              <span onClick={() => sumbitDelete(course.id)}>delete</span>
            </div>
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
  justify-content: space-between;
  align-items: center;
  color: white;
`;
