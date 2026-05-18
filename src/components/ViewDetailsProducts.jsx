import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewDetailsProducts = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
       const res = await axios.get(
  `http://localhost:5000/products/products-get/${id}`
);

        // ✅ FIX: extract product from response
        setSingleProduct(res.data.data);

      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
    };

    fetchProduct();
  }, [id]);

  
  useEffect(() => {
    if (singleProduct) {
      console.log("PRODUCT:", singleProduct);
      console.log("IMAGE:", singleProduct.image);
    }
  }, [singleProduct]);

  if (!singleProduct) {
    return <p className="text-center py-10">Loading product details...</p>;
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          
          {/* Product Details */}
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              BRAND NAME
            </h2>

            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              {singleProduct.name}
            </h1>

            <p className="leading-relaxed mb-4">
              This is a great product: {singleProduct.name}. It costs ₹
              {singleProduct.price}.
            </p>

            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Color</span>
              <span className="ml-auto text-gray-900">Blue</span>
            </div>

            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Size</span>
              <span className="ml-auto text-gray-900">Medium</span>
            </div>

            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Quantity</span>
              <span className="ml-auto text-gray-900">4</span>
            </div>

            <div className="flex gap-3">
              <span className="title-font font-medium text-2xl text-gray-900">
                ₹{singleProduct.price}
              </span>

              <button className="bg-indigo-500 text-white py-2 px-6 rounded hover:bg-indigo-600 transition">
                Buy Now
              </button>
            </div>
          </div>

          {/* Product Image */}
          <img
            alt={singleProduct.name}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={singleProduct.image}
          />
        </div>
      </div>
    </section>
  );
};

export default ViewDetailsProducts;
