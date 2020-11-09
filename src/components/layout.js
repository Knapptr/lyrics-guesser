import React from "react";
import layoutStyle from "./layout.module.css";
import Footer from "./footer";
import TitleBar from "./TitleBar";
const Layout = ({ children }) => {
  return (
    <div className={layoutStyle.outerFrame}>
      <TitleBar />
      <div className={layoutStyle.contentBox}>{children}</div> <Footer />
    </div>
  );
};

export default Layout;
