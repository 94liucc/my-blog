import { Menu } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Blogs, Projects, Routemap } from "routes";
import styled from "styled-components";
export const Header = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("mail");

  const Navs = styled.div`
    display: flex;
    justify-content: center;
  `;
  const items = [
    { label: "首页", key: "home" },
    {
      label: "博客",
      key: "blog",
      children: [
        { label: "前端", key: Blogs[0] },
        { label: "归档", key: Blogs[1] },
      ],
    },
    {
      label: "项目",
      key: "project",
      children: [{ label: "项目1", key: Projects[0] }],
    },
  ];
  const handleClick = (events: any) => {
    console.log("click--", events);
    setCurrent(events.key);

    navigate(Routemap.get(events.key));
  };
  return (
    <React.Fragment>
      <div className="logo" />

      <Menu
        mode="horizontal"
        style={{ background: "transparent" }}
        selectedKeys={[current]}
        defaultSelectedKeys={["home"]}
        items={items}
        onClick={handleClick}
      />
    </React.Fragment>
  );
};
