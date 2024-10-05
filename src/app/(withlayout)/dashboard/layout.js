import Footer from "@/components/Shared/Footer";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default layout;
