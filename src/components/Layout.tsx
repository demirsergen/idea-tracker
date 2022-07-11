import React from "react";
import IdeasBoard from "../features/ideas/IdeasBoard";
import BrandComponent from "./BrandComponent";
import Categories from "./Categories";
import Roadmap from "./Roadmap";

const Layout = () => {
  return (
    <div className="w-full h-screen px-48 my-0 py-12 bg-gray-50">
      <BrandComponent />
      <Categories />
      <Roadmap />
      <IdeasBoard />
    </div>
  );
};

export default Layout;
