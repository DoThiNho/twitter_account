import { Col, Form, Input, Row } from "antd";
import { LoginImg } from "../../../assets/images";
import FormWrapper from "../../../shared/ui/FormWrapper";
import { UserLoginForm } from "../../../shared/types/api";
import GoogleIcon from "../../../assets/icons/googleIcon";

const LoginContainer = () => {
  return (
    <div className="w-[60%] h-[60%] shadow-lg">
      <Row>
        <Col span={12}>
          <img src={LoginImg} />
          <div className="text-center text-lg cursor-pointer text-blue-500">
            Create an account
          </div>
        </Col>
        <Col span={12}>
          <div className="h-full flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-center mb-6">LOGIN</h1>
            <FormWrapper<UserLoginForm>
              initialValues={{ email: "", password: "" }}
              confirmButtonText="Login"
              className="px-6"
            >
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input size="large" placeholder="Enter email" />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input.Password size="large" placeholder="Enter password" />
              </Form.Item>
            </FormWrapper>
            <div className="flex items-center justify-center gap-2 mt-6">
              <p className="text-center text-md">or sign in with</p>
              <div className="cursor-pointer">
                <GoogleIcon />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginContainer;
