import React from "react";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Dashboard</h2>
        <p className="text-gray-600 text-lg text-center">
          Welcome to the <span className="font-semibold">Admin Dashboard</span>!
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
