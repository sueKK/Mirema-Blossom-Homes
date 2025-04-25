import React from "react";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Dashboard</h2>
        <p className="text-gray-600 text-lg text-center">
          Welcome to the <span className="font-semibold">Admin Dashboard</span>!
          Here you can manage bookings and view stats.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
