import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AdminEditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const [loading, setLoading] = useState(true);

  // ✅ GET product by ID (fill form)
  useEffect(() => {
    const loadProduct = async () => {
      try {
const BASE_URL = "http://localhost:5000";

const res = await axios.get(
  `${BASE_URL}/products/products-get/${id}`
);
        console.log(res.data)
        setProduct({
          name:res.data.data.name,
          image:res.data.data.image,
          price:res.data.data.price
        }
        )
        // setProduct(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        alert("Failed to load product");
      }
    };

    loadProduct();
  }, [id]);

  // ✅ PUT product by ID (update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
  `http://localhost:5000/products/product-update/${id}`,
  product
);
      alert("Product updated successfully!");
      navigate("/admin/products");
    } catch (error) {
      console.error(error);
      alert("Failed to update product");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-12 p-8 bg-white rounded-2xl shadow-lg flex flex-col gap-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Edit Product
      </h2>

      {/* Name */}
      <div className="flex flex-col">
        <label className="font-semibold mb-2">Product Name</label>
        <input
          type="text"
          value={product.name}
          onChange={(e) =>
            setProduct({ ...product, name: e.target.value })
          }
          className="border p-3 rounded-lg"
          required
        />
      </div>

      {/* Price */}
      <div className="flex flex-col">
        <label className="font-semibold mb-2">Price</label>
        <input
          type="number"
          value={product.price}
          onChange={(e) =>
            setProduct({ ...product, price: Number(e.target.value) })
          }
          className="border p-3 rounded-lg"
          required
        />
      </div>

      {/* Image */}
      <div className="flex flex-col">
        <label className="font-semibold mb-2">Image URL</label>
        <input
          type="text"
          value={product.image}
          onChange={(e) =>
            setProduct({ ...product, image: e.target.value })
          }
          className="border p-3 rounded-lg"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
      >
        Update Product
      </button>
    </form>
  );
};

export default AdminEditProduct;
