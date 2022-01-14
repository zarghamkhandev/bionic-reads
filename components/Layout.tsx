import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
