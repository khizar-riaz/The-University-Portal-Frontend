import React from 'react';
import { Card, Button, Input, Form, Row, Col } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, TeamOutlined } from '@ant-design/icons';
import '../stylesheet/Login.css'; // Import custom CSS for styling

function StudentLogin() {
  const onFinish = (values) => {
    // Handle login logic
  };

  return (
    <div className="login-page">
    <Card className="login-card">
      <h2 className="login-title">Student Login</h2>
      <Row justify="center" style={{ marginBottom: '20px' }}>
        <Col>
        <div className="avatar-container">
              <TeamOutlined className="avatar-icon" />
            </div>
        </Col>
      </Row>
      <Form onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please enter your password' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button className="login-button" type="primary" htmlType="submit" block>
            Log in
          </Button>
        </Form.Item>
        <div className="forgot-signup">
          <a href="/forgot-password">Forgot Password?</a> | <a href="/sign-up">Sign Up</a>
        </div>
      </Form>
    </Card>
  </div>
  );
}

export default StudentLogin