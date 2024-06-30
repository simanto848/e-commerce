import { useContext } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";
import Context from "../context";

const AdminPannel = () => {
  const { user } = useContext(Context);

  return (
    <div className="min-h-[calc(100vh-120px)] flex bg-gray-100">
      <aside className="bg-white min-h-full w-64 p-4 shadow-md">
        <div className="h-32 flex flex-col justify-center items-center mb-6">
          <div className="text-5xl cursor-pointer relative flex justify-center mb-4">
            {user ? <FaRegCircleUser /> : <FaRegCircleUser />}
          </div>
          <p className="capitalize text-lg font-semibold">
            {user?.name || "User"}
          </p>
          <p className="text-sm text-gray-500">{user?.role || "Role"}</p>
        </div>

        <nav className="grid gap-2">
          <Link
            to="/admin-panel/users"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:underline transition"
          >
            Manage Users
          </Link>
          <Link
            to="/admin-panel/categories"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:underline transition"
          >
            Manage Categories
          </Link>
          <Link
            to="/admin-panel/addresses"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:underline transition"
          >
            Manage Addresses
          </Link>
          <Link
            to="/admin-panel/products"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:underline transition"
          >
            Manage Products
          </Link>
          <Link
            to="/admin-panel/orders"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:underline transition"
          >
            Manage Orders
          </Link>
          <Link
            to="/admin-panel/order-items"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:underline transition"
          >
            Manage Order Items
          </Link>
          <Link
            to="/admin-panel/payments"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:underline transition"
          >
            Manage Payments
          </Link>
          <Link
            to="/admin-panel/reviews"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:underline transition"
          >
            Manage Reviews
          </Link>
        </nav>
      </aside>

      <main className="w-full h-full p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPannel;
