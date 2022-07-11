import React from "react";

const Roadmap = () => {
  const roadmap = [
    {
      status: "Planned",
      count: 2,
    },
    {
      status: "In Progress",
      count: 3,
    },
    {
      status: "Live",
      count: 1,
    },
  ];
  return (
    <div className="w-60 bg-red-100 p-4">
      <div className="flex justify-between">
        <h3>Roadmap</h3>
        <button className="bg-red-50 px-2">View</button>
      </div>
      <div>
        {roadmap.map((idea) => (
          <div className="flex justify-between">
            <div className="w-4 rounded-full bg-orange-50"></div>
            <p>{idea.status}</p>
            <p>{idea.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
