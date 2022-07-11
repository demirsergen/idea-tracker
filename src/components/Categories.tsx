import React from "react";

const Categories = () => {
  const categories = ["All", "UI", "UX", "Enhancement", "Bug"];
  return (
    <div className="w-60 bg-white px-4 py-8 flex gap-2 flex-wrap my-2">
      {categories.map((category) => {
        return (
          <button className=" px-2 bg-blue-50 text-blue-600">{category}</button>
        );
      })}
    </div>
  );
};

export default Categories;
