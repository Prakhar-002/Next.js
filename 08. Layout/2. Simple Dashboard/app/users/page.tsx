const Users = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Users</h2>
        <p className="text-lg text-gray-600 mb-8">Manage your users here.</p>

        <div className="mb-8 flex justify-end">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Add New User
          </button>
        </div>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">
                  Name
                </th>
                <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">
                  Email
                </th>
                <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">
                  Role
                </th>
                <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-6 text-sm text-gray-800">John Doe</td>
                <td className="py-4 px-6 text-sm text-gray-600">
                  johndoe@example.com
                </td>
                <td className="py-4 px-6 text-sm text-gray-600">Admin</td>
                <td className="py-4 px-6 text-sm">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Edit
                  </button>
                  <span className="mx-2">|</span>
                  <button className="text-red-600 hover:text-red-800 font-medium">
                    Delete
                  </button>
                </td>
              </tr>
              <tr className="border-t border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-6 text-sm text-gray-800">Jane Smith</td>
                <td className="py-4 px-6 text-sm text-gray-600">
                  janesmith@example.com
                </td>
                <td className="py-4 px-6 text-sm text-gray-600">User</td>
                <td className="py-4 px-6 text-sm">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Edit
                  </button>
                  <span className="mx-2">|</span>
                  <button className="text-red-600 hover:text-red-800 font-medium">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
