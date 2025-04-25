import React from "react";

const Sidebar = ({ currentTab, setCurrentTab }) => {
  const tabs = ["Dashboard", "Bookings", "Settings"];

  return (
    <div className="w-64 bg-white h-full shadow-lg p-4 fixed">
      <h1 className="text-xl font-bold mb-8">Admin Panel</h1>
      <ul>
        {tabs.map((tab) => (
          <li
            key={tab}
            className={`p-3 rounded cursor-pointer mb-2 ${
              currentTab === tab ? "bg-blue-500 text-white" : "hover:bg-gray-100"
            }`}
            onClick={() => setCurrentTab(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
