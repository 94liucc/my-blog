import React from "react";
import { HashRouter } from "react-router-dom";
import { Layout } from "antd";
import { Header as HeaderComponent } from "layouts/Header";
import "./App.css";
import { Contents } from "page";
import imgBack from "assets/image/back.png";
// require("assets/image/back.png");
function App() {
  const { Header, Content } = Layout;
  const MAIN_COLOR = "#f3f3f3";
  return (
    <HashRouter>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${imgBack})`,
          backgroundSize: "cover",
        }}
      >
        <Layout
          style={{
            width: "100%",
            height: "100%",
            background: "transparent",
            position: "absolute",
          }}
        >
          <Header
            style={{ background: "transparent", paddingInline: 0 }}
            className="header"
          >
            <HeaderComponent></HeaderComponent>
          </Header>
          <Content className="content" style={{ background: "transparent" }}>
            <Contents></Contents>
          </Content>
        </Layout>
      </div>
    </HashRouter>
  );
}

export default App;
