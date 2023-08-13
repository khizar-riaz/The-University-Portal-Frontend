import React from 'react';
import { Card, Row, Col, Button  } from 'antd';
import { UserOutlined, SolutionOutlined, TeamOutlined } from '@ant-design/icons';
import '../stylesheet/Home.css'; 
import { Link } from 'react-router-dom';


function HomePage  () {
  return (
    <div className="home-page">
      <h1 className="portal-title">Welcome to University Portal</h1>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card className="portal-card" title={<span className="card-title">Admin</span>}>
            <div className="avatar-container">
              <UserOutlined className="avatar-icon" />
            </div>
            <Button className="login-button" block>
              Login as Admin
            </Button>
          </Card>
        </Col>
        <Col span={8}>
          <Card className="portal-card" title={<span className="card-title">Teacher</span>}>
            <div className="avatar-container">
              <SolutionOutlined className="avatar-icon" />
            </div>
            <Button className="login-button" block>
              Login as Teacher
            </Button>
          </Card>
        </Col>
        <Col span={8}>
          <Card className="portal-card" title={<span className="card-title">Student</span>}>
            <div className="avatar-container">
              <TeamOutlined className="avatar-icon" />
            </div>
            <Link to="/student/login">
             <Button className="login-button" block>
              Login as Student
                </Button>
            </Link>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
