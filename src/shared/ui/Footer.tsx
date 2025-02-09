import { Layout, Row, Col } from "antd";
import {
  TwitterOutlined,
  FacebookFilled,
  YoutubeFilled,
  LinkedinFilled,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="w-4/5 mx-auto">
        <Row gutter={[32, 32]}>
          <Col xs={24} md={8}>
            <h3 className="font-montserrat text-xl text-orange-500 font-semibold">
              Company
            </h3>
            <div className="mt-4 space-y-2">
              {["About Us", "Contact Us", "Reservation", "Privacy Policy"].map(
                (item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex text-white no-underline hover:text-orange-500"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </Col>
          <Col xs={24} md={8}>
            <h3 className="font-montserrat text-xl text-orange-500 font-semibold">
              Contact Us
            </h3>
            <div className="mt-4 space-y-2">
              {[
                {
                  icon: <EnvironmentOutlined />,
                  text: "123 Main St, New York, NY 10001",
                },
                { icon: <PhoneOutlined />, text: "(123) 456-7890" },
                { icon: <MailOutlined />, text: "info@example.com" },
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center text-white no-underline hover:text-orange-500"
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  {item.text}
                </a>
              ))}
            </div>
            <div className="flex gap-3 mt-4">
              {[
                <TwitterOutlined />,
                <FacebookFilled />,
                <YoutubeFilled />,
                <LinkedinFilled />,
              ].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-white text-xl hover:text-orange-500"
                >
                  {icon}
                </a>
              ))}
            </div>
          </Col>
          <Col xs={24} md={8}>
            <h3 className="font-montserrat text-xl text-orange-500 font-semibold">
              Opening Hours
            </h3>
            <div className="mt-4 space-y-4">
              <div>
                <span className="text-lg">Monday - Saturday:</span>
                <br /> 09am - 09pm
              </div>
              <div>
                <span className="text-lg">Sunday:</span>
                <br /> 10am - 08pm
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Footer>
  );
};

export default FooterComponent;
