import { Col, Form, Input, Row } from "antd";
import { LoginImg } from "../../../assets/images";
import FormWrapper from "../../../shared/ui/FormWrapper";
import { UserRegisterForm } from "../../../shared/types/api";
import GoogleIcon from "../../../assets/icons/googleIcon";

const SignUpContainer = () => {
  return (
    <div className="w-[60%] h-[60%] shadow-lg">
      <Row>
        <Col span={12}>
          <img src={LoginImg} />
          <div className="text-center text-lg cursor-pointer text-blue-500">
            Already have an account?
          </div>
        </Col>
        <Col span={12}>
          <div className="h-full flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-center mb-6">SIGN UP</h1>
            <FormWrapper<UserRegisterForm>
              initialValues={{
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              confirmButtonText="Sign Up"
              className="px-6"
            >
              <Form.Item
                name="name"
                label="Name"
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
              <Form.Item
                name="confirmPassword"
                label="Confirm Password"
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
              <p className="text-center text-md">or sign up with</p>
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

export default SignUpContainer;
