import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* SIDEBAR */}
      <aside className="w-64 bg-gray-900 text-white p-5 space-y-4">
        <h2 className="text-2xl font-bold">Admin Panel</h2>

        <nav className="space-y-2">
          <Link to="/admin" className="block hover:text-yellow-400">
            Dashboard
          </Link>
          <Link to="/admin/products" className="block hover:text-yellow-400">
            Products
          </Link>
          <Link to="/admin/add-product" className="block hover:text-yellow-400">
            Add Product
          </Link>
        </nav>
      </aside>

      {/* CONTENT */}
      <main className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
