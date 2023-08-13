import React from "react";
import { Card, Button, Input, Form } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import '../stylesheet/Signup.css'; // Import custom CSS for styling

function StudentSignup() {
  const onFinish = (values) => {
    // Handle signup logic
  };
  return (
    <div className="signup-page">
      <Card className="signup-card">
        <h2 className="signup-title">Student Signup</h2>
        <Form onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please enter your username" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("The two passwords do not match");
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Confirm Password"
            />
          </Form.Item>
          <Form.Item
            name="captcha"
            rules={[{ required: true, message: "Please enter the captcha" }]}
          >
            <Input
              prefix={<LockOutlined />}
              placeholder="Captcha (e.g. 5 + 3)"
            />
          </Form.Item>
          <Form.Item>
            <Button
              className="signup-button"
              type="primary"
              htmlType="submit"
              block
            >
              Sign Up
            </Button>
          </Form.Item>
          <div className="already-signedup">
            Already have an account? <Link to="/student/login">Log in</Link>
          </div>
        </Form>
      </Card>
    </div>
  );
}

export default StudentSignup;
