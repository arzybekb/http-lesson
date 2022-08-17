import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../containers/NotFound";
import { ROUTES } from "../utils/constants/general";
import PrivateAuthRouter from "./PrivateAuthRouter";
const LandingPage = lazy(() => import("../containers/LandingPage/Index"));
const DashboardRoutes = lazy(() => import("../Routes/DashboardRoutes"));

function MainRouter({ isAuthorized }) {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={ROUTES.MAIN_PAGE} />} />
      <Route
        path={ROUTES.MAIN_PAGE}
        element={
          <PrivateAuthRouter
            component={<LandingPage />}
            isAllowed={!isAuthorized}
            fallbackPath={`${ROUTES.DASHBOARD}`}
          />
        }
      />
      <Route
        path={`${ROUTES.DASHBOARD}/*`}
        element={
          <PrivateAuthRouter
            component={<DashboardRoutes />}
            isAllowed={isAuthorized}
            fallbackPath={`${ROUTES.MAIN_PAGE}`}
          />
        }
      />
      <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}

export default MainRouter;
