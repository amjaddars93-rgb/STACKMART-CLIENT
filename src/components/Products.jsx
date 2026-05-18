import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }

    const Getproductsdata = async () => {
      try {
      const response = await axios.get(
  "http://localhost:5000/products/products-get"
);
        setProducts(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error(
          "API Error:",
          error.response ? error.response.data : error.message
        );
        setLoading(false);
      }
    };

    Getproductsdata();
  }, [navigate]);

  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingIndex = cart.findIndex((item) => item._id === product._id);
    if (existingIndex !== -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };

  if (loading) return <p className="text-center mt-10">Loading products...</p>;
  if (products.length === 0) return <p className="text-center mt-10">No products found</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="p-4 border rounded shadow flex flex-col justify-between"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-48 w-full object-contain mb-2"
          />
          <h3 className="font-bold mt-2">{product.name}</h3>
          <p className="text-indigo-600 font-semibold">${product.price}</p>

          {/* ✅ Buttons */}
          <div className="flex gap-2 mt-3">
           <button
  onClick={() => navigate(`/viewdetailsproducts/${product._id}`)}
  className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
>
  View Details
</button>

            <button
              onClick={() => handleAddToCart(product)}
              className="flex-1 bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
