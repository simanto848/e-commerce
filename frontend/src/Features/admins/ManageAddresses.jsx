import React from "react";

const ManageAddresses = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Addresses</h1>
      <div className="shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">User</th>
              <th className="py-2 px-4 border-b">Address</th>
              <th className="py-2 px-4 border-b">City</th>
              <th className="py-2 px-4 border-b">State</th>
              <th className="py-2 px-4 border-b">Zip Code</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Placeholder data */}
            <tr>
              <td className="py-2 px-4 border-b">1</td>
              <td className="py-2 px-4 border-b">John Doe</td>
              <td className="py-2 px-4 border-b">123 Main St</td>
              <td className="py-2 px-4 border-b">Anytown</td>
              <td className="py-2 px-4 border-b">CA</td>
              <td className="py-2 px-4 border-b">12345</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-blue-500 text-white px-2 py-1 rounded">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAddresses;
