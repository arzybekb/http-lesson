import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Bought from "../pages/Bought";
import Course from "../pages/Course";
import Products from "../pages/Products";
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
        <Route path={ROUTES.PRODUCTS} element={<Products />} />
        <Route path={ROUTES.BOUGHT} element={<Bought />} />
      </Routes>
    </DashboardLayout>
  );
}

export default DashboardRoutes;
