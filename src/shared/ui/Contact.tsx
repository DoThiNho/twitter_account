import {
  FacebookOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element name="contact" className="element">
      <div className="w-[80%] mx-auto my-[100px]">
        <h3 className="text-4xl font-bold text-center">Contact us</h3>
        <Row gutter={16} className="mt-8">
          <Col xs={24} sm={24} md={8} lg={8} xl={8} className="h-[200px] mb-4">
            <div className="bg-white w-full h-full flex flex-col justify-around items-center shadow-md p-4 rounded">
              <div className="bg-primary p-4 rounded-full text-white text-3xl w-[50px] h-[50px] flex justify-center items-center">
                <PhoneOutlined />
              </div>
              <h5 className="text-2xl">Call us</h5>
              <p className="text-lg">0987654321</p>
            </div>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8} className="h-[200px] mb-4">
            <div className="bg-white w-full h-full flex flex-col justify-around items-center shadow-md p-4 rounded">
              <div className="bg-primary p-4 rounded-full text-white text-3xl w-[50px] h-[50px] flex justify-center items-center">
                <MailOutlined />
              </div>
              <h5 className="text-2xl">Email us</h5>
              <p className="text-lg">hieudovan@gmail.com</p>
            </div>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8} className="h-[200px] mb-4">
            <div className="bg-white w-full h-full flex flex-col justify-around items-center shadow-md p-4 rounded">
              <div className="bg-primary p-4 rounded-full text-white text-3xl w-[50px] h-[50px] flex justify-center items-center">
                <FacebookOutlined />
              </div>
              <h5 className="text-2xl">Facebook</h5>
              <a
                className="text-lg"
                href="https://www.facebook.com/hieu.o.van.559361#"
                target="_blank"
              >
                HieuDoVan
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </Element>
  );
};

export default Contact;
