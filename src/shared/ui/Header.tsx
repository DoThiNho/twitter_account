import { LogoImg } from "@/assets/images";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import LeftMenu from "./Navbar/LeftMenu";
import RightMenu from "./Navbar/RightMenu";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="flex justify-center items-center w-full shadow-md py-2 bg-white fixed top-0 z-10">
      <Row className="w-[80%]">
        <Col span={4} onClick={() => handleNavigate("/")}>
          <img src={LogoImg} className="cursor-pointer" />
        </Col>
        <Col span={20}>{isMobile ? <RightMenu /> : <LeftMenu />}</Col>
      </Row>
    </div>
  );
};

export default Header;
