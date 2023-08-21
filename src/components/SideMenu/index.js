import React from 'react'
import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
function SideMenu() {
  
  const navigate = useNavigate();
  return (
    <div className="SideMenu">
       <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
            navigate(item.key);
        }}

        items={[
          {
            label: "Dashbaord",
            icon: <AppstoreOutlined />,
            key: "/student/default",
          },
          {
            label: "Courses",
            key: "/student/courses",
            icon: <ShopOutlined />,
          },
          {
            label: "Results",
            key: "/student/result",
            icon: <ShoppingCartOutlined />,
          },
          {
            label: "Attendence",
            key: "/student/attendence",
            icon: <UserOutlined />,
          },
        ]}
      ></Menu>
    </div>
  );
}

export default SideMenu