import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const allProducts =
      JSON.parse(localStorage.getItem("products")) || [];
    setProducts(allProducts);
  }, []);

  const addToCart = (product) => {
    const oldCart = JSON.parse(localStorage.getItem("cart")) || [];

    oldCart.push({
      ...product,
      quantity: 1,
    });

    localStorage.setItem("cart", JSON.stringify(oldCart));

    alert(`${product.name} Added To Cart`);
  };

  const categories = [
    { name: "Electronics", emoji: "📱" },
    { name: "Fashion", emoji: "👕" },
    { name: "Shoes", emoji: "👟" },
    { name: "Accessories", emoji: "⌚" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-black via-indigo-900 to-purple-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

          <div>
            <h1 className="text-5xl font-bold leading-tight">
              Welcome to <span className="text-indigo-300">STACKMART</span>
            </h1>

            <p className="mt-4 text-lg text-gray-300">
              Your one-stop shop for electronics, fashion & more.
            </p>

            <button
              onClick={() => navigate("/products")}
              className="mt-6 px-6 py-3 bg-indigo-500 rounded-lg font-semibold hover:bg-indigo-600 transition"
            >
              Start Shopping
            </button>
          </div>

          <img
            src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
            className="w-80 mx-auto"
            alt="shop"
          />
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Shop By Category
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg text-center cursor-pointer"
            >
              <div className="text-4xl">{cat.emoji}</div>
              <h3 className="mt-2 font-semibold">{cat.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="pb-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Trending Products 🔥
        </h2>

        <div className="max-w-6xl mx-auto px-6">
          {products.length === 0 ? (
            <h1 className="text-center text-xl text-gray-600">
              No Products Found
            </h1>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow hover:shadow-2xl transition p-5"
                >

                  <img
                    src={product.image || product.img}
                    alt={product.name}
                    className="w-full h-44 object-contain"
                  />

                  <h3 className="mt-4 text-lg font-bold">
                    {product.name}
                  </h3>

                  <p className="text-indigo-600 font-semibold">
                    {product.price}
                  </p>

                  <div className="flex gap-3 mt-4">

                    <button
                      onClick={() =>
                        navigate(`/products/${product.id}`)
                      }
                      className="w-1/2 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    >
                      View
                    </button>

                    <button
                      onClick={() => addToCart(product)}
                      className="w-1/2 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                      Add
                    </button>

                  </div>
                </div>
              ))}

            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default Homepage;