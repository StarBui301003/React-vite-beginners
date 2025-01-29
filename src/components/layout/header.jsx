import { Link, NavLink } from "react-router-dom";
// import "./header.css";
import {
  SettingOutlined,
  HomeOutlined,
  UsergroupAddOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
const Header = () => {
  const [current, setCurrent] = useState("");

  const { user } = useContext(AuthContext);

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const items = [
    {
      label: <Link to={"/"}>Home</Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to={"/users"}>Users</Link>,
      key: "users",
      icon: <UsergroupAddOutlined />,
    },
    {
      label: <Link to={"/books"}>Books</Link>,
      key: "books",
      icon: <AuditOutlined />,
    },
    {
      label: "Cài đặt",
      key: "setting",
      icon: <SettingOutlined />,
      children: [
        {
          label: <Link to={"/login"}>Đăng nhập</Link>,
          key: "login",
        },
        {
          label: <Link to={"/logout"}>Đăng xuất</Link>,
          key: "logout",
        },
      ],
    },
  ];

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Header;
