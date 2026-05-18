import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../admins/adminapi";

const AdminAddProduct = () => {
  const [form, setForm] = useState({ name: "", price: 0, image: "" });
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await addProduct(form); // send to backend
      alert("Product added successfully!");
      navigate("/admin/products");
    } catch (err) {
      console.error("Failed to add product:", err.response ? err.response.data : err.message);
      alert("Error adding product. Check console.");
    }
  };

  return (
 <form
  onSubmit={submit}
  className="max-w-md mx-auto mt-12 p-8 bg-white rounded-2xl shadow-lg flex flex-col gap-6"
>
  <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
    Add New Product
  </h2>

  {/* Name Input */}
  <div className="flex flex-col">
    <label className="text-gray-700 font-semibold mb-2">Product Name</label>
    <input
      type="text"
      placeholder="Enter product name"
      value={form.name}
      onChange={(e) => setForm({ ...form, name: e.target.value })}
      required
      className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
    />
  </div>

  {/* Price Input */}
  <div className="flex flex-col">
    <label className="text-gray-700 font-semibold mb-2">Price</label>
    <input
      type="number"
      placeholder="Enter product price"
      value={form.price}
      onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
      required
      className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
    />
  </div>

  {/* Image URL Input */}
  <div className="flex flex-col">
    <label className="text-gray-700 font-semibold mb-2">Image URL</label>
    <input
      type="text"
      placeholder="Enter image URL"
      value={form.image}
      onChange={(e) => setForm({ ...form, image: e.target.value })}
      required
      className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
    />
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition-all duration-200"
  >
    Add Product
  </button>
</form>


  );
};

export default AdminAddProduct;
