import { Button, Pagination } from "antd";
import ProductItem from "./ProductItem";
import { Element } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

interface ProductListProps {
  isHideSeeAllButton?: boolean;
}

const ProductList = ({ isHideSeeAllButton }: ProductListProps) => {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <Element name="products">
      <div className="w-[80%] mx-auto mt-[100px]">
        <div className="flex justify-between items-center">
          <Button onClick={() => handleNavigate("/")}>
            <ArrowLeftOutlined />
            Quay lại
          </Button>
          <h2 className="flex-1 text-center text-4xl font-bold mb-8">
            TWITTER ACCOUNT
          </h2>
          <Button
            type="primary"
            onClick={() => handleNavigate("/products")}
            hidden={isHideSeeAllButton}
          >
            See All
          </Button>
        </div>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <div className="flex justify-end">
          <Pagination defaultCurrent={1} total={30} />
        </div>
      </div>
    </Element>
  );
};

export default ProductList;
