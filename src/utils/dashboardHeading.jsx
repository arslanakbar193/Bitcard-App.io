import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const DashboardHeading = () => {
  return (
    <>
      <div className="dashboard-heading">
        <Title level={3}>Dashboard</Title>
        <Title level={5}>Welcome back</Title>
      </div>
    </>
  );
};

export default DashboardHeading;
