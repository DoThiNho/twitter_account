import Navbar from "@/shared/ui/Navbar";
import { LogoImg } from "@/assets/images";
import { UserOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <div className="flex justify-center items-center w-full shadow-md py-2 bg-white fixed top-0 z-10">
      <Row className="w-[80%]">
        <Col span={4} onClick={() => handleNavigate("/")}>
          <img src={LogoImg} className="cursor-pointer" />
        </Col>
        <Col span={16}>
          <Navbar />
        </Col>
        <Col span={4}>
          <div className="flex justify-center items-center h-full cursor-pointer">
            <UserOutlined className="text-3xl" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
