import { TwitterImg } from "@/assets/images";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";

const ProductItem = () => {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <div className="border border-black p-4 rounded mb-8">
      <Row gutter={16}>
        <Col xs={24} sm={24} md={4} lg={4} xl={4} className="mb-4">
          <img src={TwitterImg} alt="" />
        </Col>
        <Col
          xs={24}
          sm={24}
          md={20}
          lg={20}
          xl={20}
          className="flex flex-col justify-center"
        >
          <h3
            className="text-2xl font-bold cursor-pointer hover:text-blue-500"
            onClick={() => handleNavigate("/product/123")}
          >
            Bán acc Twitter (X) Tick Xanh - TK Cổ
          </h3>
          <p className="text-lg">
            Bán Tài Khoản Twitter Tick Xanh và Tick Cổ Cung cấp tài khoản
            Twitter (X) đã xác minh tick xanh Tài khoản X cổ, new các loại Tất
            cả tài khoản đều có bảo hành Liên hệ ngay để biết thêm chi tiết qua
            Telegram: @tonymmo2k.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default ProductItem;
