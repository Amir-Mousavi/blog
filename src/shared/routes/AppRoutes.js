import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DashboardRoutes from "../../Dashboard/routes/DashboardRoutes";
import PostsRoutes from "../../Posts/Routes/PostsRoutes";

const AppRoutes = () => (
  <Router>
    <DashboardRoutes />
    <PostsRoutes />
  </Router>
);

export default AppRoutes;
