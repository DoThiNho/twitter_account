import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { useState } from "react";
import { Link, scroller } from "react-scroll";

const menuItems = [
  { label: "Trang chủ", target: "home" },
  { label: "Sản phẩm", target: "products" },
  { label: "Liên hệ", target: "contact" },
];

const RightMenu = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  const handleScroll = (target: string) => {
    onClose();
    setTimeout(() => {
      scroller.scrollTo(target, {
        duration: 500,
        smooth: true,
        spy: true,
      });
    }, 300);
  };

  return (
    <>
      <div
        className="flex justify-end items-center h-full"
        onClick={showDrawer}
      >
        <MenuOutlined className="text-2xl cursor-pointer" />
      </div>
      <Drawer title="Basic Drawer" onClose={onClose} open={visible} width="70%">
        <nav>
          <ul>
            {menuItems.map(({ label, target }) => (
              <li key={target} className="mb-4">
                <Link
                  className="text-lg"
                  to={target}
                  spy
                  smooth
                  duration={500}
                  onClick={() => handleScroll(target)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="h-full cursor-pointer">
          <UserOutlined className="text-3xl" />
        </div>
      </Drawer>
    </>
  );
};

export default RightMenu;
