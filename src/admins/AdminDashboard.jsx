import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0); // optional for later
  const [totalUsers, setTotalUsers] = useState(0); // optional for later

  // Fetch total products from backend
  const fetchTotalProducts = async () => {
    try {
      const response = await axios.get(
  "http://localhost:5000/products/products-get"
); 
      // adjust the URL based on your backend route
      setTotalProducts(response.data.data.length); // assuming data array is in response.data.data
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchTotalProducts();
    // You can also fetch orders and users here if needed
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-5 shadow rounded">
          <h2 className="text-xl">Total Products</h2>
          <p className="text-2xl font-bold">{totalProducts}</p>
        </div>

        <div className="bg-white p-5 shadow rounded">
          <h2 className="text-xl">Total Orders</h2>
          <p className="text-2xl font-bold">{totalOrders}</p>
        </div>

        <div className="bg-white p-5 shadow rounded">
          <h2 className="text-xl">Users</h2>
          <p className="text-2xl font-bold">{totalUsers}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
