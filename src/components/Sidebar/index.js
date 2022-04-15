import { Layout, Menu } from "antd";
import { TeamOutlined, GlobalOutlined, HomeOutlined } from "@ant-design/icons";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = ({ collapsed }) => {
  let location = useLocation();
  //   console.log(location.pathname);
  let currentKey = 1;
  if (location.pathname === "/") {
    currentKey = 1;
  } else if (location.pathname === "/contactlist") {
    currentKey = 2;
  } else if (location.pathname === "/covid") {
    currentKey = 3;
  }
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[currentKey.toString()]}
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">HOME</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<TeamOutlined />}>
          <Link to="/contactlist">CONTACT LIST</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<GlobalOutlined />}>
          <Link to="/covid">COVID</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
