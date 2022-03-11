import React from "react";
import Sidebar from "../components/sideBar";
import Topbar from "../components/topbar";
import MainContent from "../components/mainContent";
import { Layout } from "antd";

const { Header, Sider, Content } = Layout;

const Template = () => {
  return (
    <>
      <Layout>
        <Header>
          <Topbar />
        </Header>
        <Layout>
          <Sider>
            <Sidebar />
          </Sider>
          <Content>
            <MainContent />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Template;
