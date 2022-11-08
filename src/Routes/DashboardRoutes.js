import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Students from "../pages/Students";
import Course from "../pages/Course";
import Groups from "../pages/Groups";
import WishList from "../pages/WishList";
import { ROUTES } from "../utils/constants/general";
import DashboardLayout from '../layout/dashboard/DashboardLayout'

function DashboardRoutes() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Navigate to="COURSES" />} />
        <Route path={ROUTES.COURSES} element={<Course />} />
        <Route path={ROUTES.WISH_LIST} element={<WishList />} />
        <Route path={ROUTES.GROUPS} element={<Groups />} />
        <Route path={ROUTES.STUDENTS} element={<Students />} />
      </Routes>
    </DashboardLayout>
  );
}

export default DashboardRoutes;
