import React from "react";

const AdminHome = () => {
  return (
    <div className="py-4">
      <h2 className="text-lg font-semibold">Admin Dashboard</h2>
      <div className="grid grid-cols-4 gap-3 mt-4">
        <div className="bg-gray-800 flex justify-between p-3 rounded">
          <p className="font-semibold">Today New Users</p>
          <p className="text-xl">10</p>
        </div>
        <div className="bg-gray-800 flex justify-between p-3 rounded">
          <p className="font-semibold">Today New Videos</p>
          <p className="text-xl">53</p>
        </div>
        <div className="bg-gray-800 flex justify-between p-3 rounded">
          <p className="font-semibold">Today New Playlists</p>
          <p className="text-xl">5</p>
        </div>
        <div className="bg-gray-800 flex justify-between p-3 rounded">
          <p className="font-semibold">Today Views</p>
          <p className="text-xl"> 2.000</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 mt-4">
        <div className="bg-gray-800 flex justify-between p-3 rounded">
          <p className="font-semibold">Total Users</p>
          <p className="text-xl">1.000</p>
        </div>
        <div className="bg-gray-800 flex justify-between p-3 rounded">
          <p className="font-semibold">Total Videos</p>
          <p className="text-xl">5.000</p>
        </div>
        <div className="bg-gray-800 flex justify-between p-3 rounded">
          <p className="font-semibold">Total Playlists</p>
          <p className="text-xl">700</p>
        </div>
        <div className="bg-gray-800 flex justify-between p-3 rounded">
          <p className="font-semibold">Total Views</p>
          <p className="text-xl"> 200.000</p>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
