import { Layout } from "antd";
import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/index";
import MyHeader from "../../components/Header";

const { Content } = Layout;

const Home = () => {
  const [collapsed, setcollapsed] = useState(false);

  return (
    <Layout>
      <Sidebar collapsed={collapsed} />
      <Layout className="site-layout">
        <MyHeader setcollapsed={setcollapsed} collapsed={collapsed} />
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          Home Page
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
