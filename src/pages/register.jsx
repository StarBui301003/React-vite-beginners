import { Button, Input, Form, notification, Row, Col, Divider } from "antd";
import { registerUserAPI } from "../services/api.service";
import { Link, useNavigate } from "react-router-dom";
const RegisterPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    //call api
    const res = await registerUserAPI(
      values.fullName,
      values.email,
      values.password,
      values.phone
    );
    if (res.data) {
      notification.success({
        message: "Register user",
        description: "Đăng ký thành công",
      });
      navigate("/login");
    } else {
      notification.error({
        message: "Error register user",
        description: JSON.stringify(res.message),
      });
    }
  };
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{ margin: "30px" }}
      // onFinishFailed={onFinishFailed}
    >
      <h3 style={{ textAlign: "center" }}>Register</h3>
      <Row justify={"center"}>
        <Col xs={24} md={8}>
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[
              {
                required: true,
                message: "Please input your fullname!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col xs={24} md={8}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col xs={24} md={8}>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col xs={24} md={8}>
          <Form.Item
            label="Phone number"
            name="phone"
            rules={[
              {
                required: true,
                pattern: new RegExp(/\d+/g),
                message: "Wrong format!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col xs={24} md={8}>
          <div>
            <Button onClick={() => form.submit()} type="primary">
              Register
            </Button>
            <Divider />
            <div>
              Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
            </div>
          </div>
        </Col>
      </Row>
    </Form>
  );
};
export default RegisterPage;
