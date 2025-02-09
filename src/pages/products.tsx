import ProductList from "@/features/product/components/ProductList";
import FooterComponent from "@/shared/ui/Footer";
import Header from "@/shared/ui/Header";

const ProductsPage = () => {
  return (
    <>
      <Header />
      <ProductList isHideSeeAllButton />
      <FooterComponent />
    </>
  );
};

export default ProductsPage;
