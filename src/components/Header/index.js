import { Header } from "antd/lib/layout/layout";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import React from "react";

const MyHeader = ({ setcollapsed, collapsed }) => {
  const toggle = () => {
    setcollapsed(!collapsed);
  };
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      {collapsed ? (
        <MenuUnfoldOutlined onClick={toggle} className="trigger" />
      ) : (
        <MenuFoldOutlined onClick={toggle} className="trigger" />
      )}
    </Header>
  );
};

export default MyHeader;
