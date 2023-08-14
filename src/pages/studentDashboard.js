import React from "react";
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
import SideMenu from '../components/SideMenu'
import ContentPage from '../components/ContentPage'
import { Space } from "antd";
// import { Layout, Menu, Input, Avatar, Row, Col } from "antd";
// import {
//   SearchOutlined,
//   BellOutlined,
//   UserOutlined,
//   HomeOutlined,
//   BookOutlined,
//   FileSearchOutlined,
//   CalendarOutlined,
// } from "@ant-design/icons";
// import "./StudentDashboard.css"; // Import custom CSS for styling
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Import React Router components
// import Dashboard from "../components/Dashboard";
// import Results from "../components/Results";

// const { Header, Sider, Content, Footer } = Layout;

function StudentDashboard() {
  return (
    // <Layout style={{ minHeight: "100vh" }}>
    //   <Sider className="sidebar" width={270}>
    //     <Menu theme="dark" mode="vertical" defaultSelectedKeys={["1"]}>
    //       <Menu.Item key="1" icon={<HomeOutlined />}>
    //         Dashboard
    //       </Menu.Item>
    //       <Menu.Item key="2" icon={<BookOutlined />}>
    //         Courses Library
    //       </Menu.Item>
    //       <Menu.Item key="3" icon={<FileSearchOutlined />}>
    //         <Link to="/results">Results</Link>
    //       </Menu.Item>
    //       <Menu.Item key="4" icon={<CalendarOutlined />}>
    //         Semester
    //       </Menu.Item>
    //     </Menu>
    //   </Sider>
    //   <Layout>
    //     <Header className="header">
    //       <Row justify="space-between" align="middle">
    //         <Col>
    //           <Input
    //             className="search-bar"
    //             placeholder="Search..."
    //             prefix={<SearchOutlined />}
    //           />
    //         </Col>
    //         <Col>
    //           <div className="header-icons">
    //             <BellOutlined />
    //             <Avatar icon={<UserOutlined />} />
    //           </div>
    //         </Col>
    //       </Row>
    //     </Header>
    //     <Content className="content">
    //       <Routes>
    //         <Route path="/" element={<Dashboard />} />
    //         <Route path="/results" element={<Results />} />
    //       </Routes>

    //     </Content>
    //     <Footer className="footer">
    //       © {new Date().getFullYear()} khizarriaz.com
    //     </Footer>
    //   </Layout>
    // </Layout>
    <div>
       <AppHeader/>
       <Space>
        <SideMenu/>
        <ContentPage/>
       </Space>
       <AppFooter/>
    </div>
  );
}

export default StudentDashboard;
