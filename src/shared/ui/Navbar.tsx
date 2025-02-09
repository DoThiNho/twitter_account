import { Link } from "react-scroll";
import styled from "styled-components";

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Navbar = () => (
  <NavbarWrapper>
    <nav>
      <ul className="flex justify-center items-center">
        <li>
          <Link
            className="text-lg px-6"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            Trang chủ
          </Link>
        </li>
        <li>
          <Link
            className="text-lg px-6"
            to="products"
            spy={true}
            smooth={true}
            duration={500}
          >
            Sản phẩm
          </Link>
        </li>
        <li>
          <Link
            className="text-lg px-6"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Liên hệ
          </Link>
        </li>
      </ul>
    </nav>
  </NavbarWrapper>
);

export default Navbar;
