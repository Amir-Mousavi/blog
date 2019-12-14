import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <Link to="/posts">Posts</Link>
  </div>
);

export default Dashboard;
