
import React, { useState } from "react";
import Dashboard from "./Dashboard";
import AdminBooking from "./AdminBookings";

const AdminPanel = () => {
  const [currentTab, setCurrentTab] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (currentTab) {
      case "Dashboard":
        return <Dashboard />;
      case "Bookings":
        return <AdminBooking />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="bg-gray-900 text-white w-full md:w-64 md:h-screen p-4 fixed md:static z-50">
        <div className="flex justify-between md:block items-center">
          <h1 className="text-xl font-bold mb-6">Admin Panel</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden text-white"
          >
            {sidebarOpen ? "✖" : "☰"}
          </button>
        </div>

        <nav className={`${sidebarOpen ? "block" : "hidden"} md:block mt-4`}>
          <ul className="space-y-2">
            <li
              onClick={() => {
                setCurrentTab("Dashboard");
                setSidebarOpen(false);
              }}
              className={`cursor-pointer px-4 py-2 rounded-lg ${
                currentTab === "Dashboard"
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-100 text-gray-200"
              }`}
            >
              Dashboard
            </li>
            <li
              onClick={() => {
                setCurrentTab("Bookings");
                setSidebarOpen(false);
              }}
              className={`cursor-pointer px-4 py-2 rounded-lg ${
                currentTab === "Bookings"
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-100 text-gray-200"
              }`}
            >
              Bookings
            </li>
          </ul>
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 bg-gray-100">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminPanel;
