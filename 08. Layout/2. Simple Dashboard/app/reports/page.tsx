const Reports = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Reports</h2>
        <p className="text-gray-600 mb-10 text-lg">
          View detailed reports here.
        </p>

        <div className="mb-8 flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Report Summary
            </h3>
            <p className="text-gray-600 text-sm">
              Here is an overview of the latest report data.
            </p>
          </div>
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transform transition-all duration-300">
            Download Report
          </button>
        </div>

        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">
                  Report ID
                </th>
                <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">
                  Title
                </th>
                <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">
                  Date
                </th>
                <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">
                  Status
                </th>
                <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-6 text-sm text-gray-800">001</td>
                <td className="py-4 px-6 text-sm text-gray-600">
                  Monthly Sales Report
                </td>
                <td className="py-4 px-6 text-sm text-gray-600">
                  February 2025
                </td>
                <td className="py-4 px-6 text-sm text-gray-600">Completed</td>
                <td className="py-4 px-6 text-sm">
                  <button className="text-blue-500 hover:text-blue-700 transition-all duration-300">
                    View
                  </button>
                  <span className="mx-2">|</span>
                  <button className="text-green-500 hover:text-green-700 transition-all duration-300">
                    Download
                  </button>
                </td>
              </tr>
              <tr className="border-t border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-6 text-sm text-gray-800">002</td>
                <td className="py-4 px-6 text-sm text-gray-600">
                  Annual Revenue Report
                </td>
                <td className="py-4 px-6 text-sm text-gray-600">
                  January 2025
                </td>
                <td className="py-4 px-6 text-sm text-gray-600">Pending</td>
                <td className="py-4 px-6 text-sm">
                  <button className="text-blue-500 hover:text-blue-700 transition-all duration-300">
                    View
                  </button>
                  <span className="mx-2">|</span>
                  <button className="text-green-500 hover:text-green-700 transition-all duration-300">
                    Download
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

export default Reports;

