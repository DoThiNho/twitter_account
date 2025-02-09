import { ProductImg } from "@/assets/images";
import FooterComponent from "@/shared/ui/Footer";
import Header from "@/shared/ui/Header";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <div className="h-screen overflow-y-scroll">
      <Header />
      <div className="w-[80%] mx-auto my-[100px]  p-4 rounded ">
        <Button onClick={() => handleNavigate("/")} className="mb-6">
          <ArrowLeftOutlined />
          Quay lại
        </Button>
        <Row gutter={16}>
          <Col span={12}>
            <img src={ProductImg} alt="" width={"80%"} />
          </Col>
          <Col span={12} className="">
            <h3 className="text-2xl font-bold cursor-pointer hover:text-blue-500">
              Bán acc Twitter (X) Tick Xanh - TK Cổ
            </h3>
            <ul className="text-lg my-6">
              <li>Cung cấp tài khoản Twitter (X) đã xác minh tick xanh</li>
              <li>Tài khoản X cổ, new các loại</li>
              <li>Tất cả tài khoản đều có bảo hành</li>
            </ul>
            <p className="text-lg">Telegram: @tonymmo2k.</p>
          </Col>
        </Row>
      </div>
      <FooterComponent />
    </div>
  );
};

export default ProductDetail;
