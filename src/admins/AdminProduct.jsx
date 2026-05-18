import { useEffect, useState } from "react";
import { deleteProduct, getProducts } from "./adminapi";
import { useNavigate } from "react-router-dom";

const AdminProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // ✅ Safe fetch function
  const fetchProducts = async (signal) => {
    try {
      const res = await getProducts({ signal });
      console.log(res.data.data)
      setProducts(res.data.data);
    } catch (err) {
      if (err.name !== "CanceledError") {
        console.error(err);
      }
    } finally {
      setLoading(false);
    }
  };

  // ✅ Effect with cleanup (NO warning)
  useEffect(() => {
    const controller = new AbortController();
    fetchProducts(controller.signal);

    return () => {
      controller.abort(); // cleanup
    };
  }, []);

  // ✅ Delete handler
  const handleDelete = async (id) => {
    try {
      if (!window.confirm("Are you sure you want to delete this product?"))
        return;

      await deleteProduct(id);

      // ✅ Update state locally (no re-fetch needed)
      setProducts((prev) => prev.filter((p) => p._id !== id));

      alert("Product deleted successfully!");
    } catch (err) {
      console.error("Failed to delete product:", err);
    }
  };

  if (loading) {
    return (
      <p className="text-center mt-10 text-gray-600">Loading products...</p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-12 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Admin Products
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((p) => (
            <div
              key={p._id}
              className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition flex flex-col justify-between"
            >
              <img
                src={p.image}
                alt={p.name}
                className="h-40 w-full object-contain mb-4 rounded-lg"
              />

              <h2 className="text-lg font-semibold text-gray-800">
                {p.name}
              </h2>
              <p className="text-indigo-600 font-bold text-xl mt-2">
                ${p.price}
              </p>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => navigate(`/admin/edit/${p._id}`)}
                  className="bg-yellow-500 text-white px-3 py-2 rounded-lg hover:bg-yellow-600 text-sm font-semibold"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(p._id)}
                  className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 text-sm font-semibold"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-4">
            No products found
          </p>
        )}
      </div>
    </div>
  );
};

export default AdminProduct;
