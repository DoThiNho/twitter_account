import { BannerImg } from "@/assets/images";
import { Button, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { Element } from "react-scroll";

const Banner = () => {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <Element name="home">
      <div className="bg-primary h-[100vh] flex  items-center">
        <Row className="w-[80%] mx-auto flex justify-center items-center h-[60vh] text-white">
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={8}
            xl={8}
            className="flex flex-col gap-8"
          >
            <h2 className="lg:text-6xl text-4xl  font-bold">
              Tài khoản Twitter
            </h2>
            <p className="text-xl">
              Mua tài khoản Twitter chất lượng cao, uy tín và bảo mật tại [Tên
              trang web]. Chúng tôi cung cấp đa dạng các loại tài khoản với số
              lượng người theo dõi và tương tác khác nhau, phù hợp với nhu cầu
              của bạn
            </p>
            <div>
              <Button
                type="primary"
                size="large"
                onClick={() => handleNavigate("/products")}
              >
                Mua ngay
              </Button>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={16} xl={16} className="w-[100%]">
            <div className="flex justify-center items-center mt-10 w-[100%]">
              <img
                src={BannerImg}
                alt="banner"
                className="lg:h-[500px] lg:h-[300px]"
              />
            </div>
          </Col>
        </Row>
      </div>
    </Element>
  );
};

export default Banner;
