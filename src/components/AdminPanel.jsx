import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Bookings from "./AdminBookings";

const AdminPanel = () => {
  const [currentTab, setCurrentTab] = useState("Dashboard");

  const renderContent = () => {
    switch (currentTab) {
      case "Dashboard":
        return <Dashboard />;
      case "Bookings":
        return <Bookings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className="flex-1 overflow-y-auto p-8 ml-64">
        {renderContent()}
      </div>
    </div>
  );
};


export default AdminPanel;
