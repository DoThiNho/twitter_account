import ProductList from "@/features/product/components/ProductList";
import Banner from "@/shared/ui/Banner";
import Contact from "@/shared/ui/Contact";
import FooterComponent from "@/shared/ui/Footer";
import Header from "@/shared/ui/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <ProductList />
      <Contact />
      <FooterComponent />
    </div>
  );
};

export default Home;
