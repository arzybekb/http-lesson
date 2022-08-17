import React from "react";
import { Navigate } from "react-router-dom";

function PrivateAuthRouter({
  component: RouteComponent,
  fallbackPath,
  isAllowed,
}) {
  if (!isAllowed) return <Navigate to={fallbackPath} replace />;
  return RouteComponent;
}

export default PrivateAuthRouter;
