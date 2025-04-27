const Dashboard = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white  rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard</h2>
        <p className="text-lg text-gray-600 mb-10">
          Welcome to your admin dashboard! Here is a quick overview of your
          current stats.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 className="font-semibold text-xl">Total Users</h3>
            <p className="text-4xl font-bold">1,200</p>
          </div>

          <div className="bg-green-500 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 className="font-semibold text-xl">Active Sessions</h3>
            <p className="text-4xl font-bold">450</p>
          </div>

          <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h3 className="font-semibold text-xl">Pending Requests</h3>
            <p className="text-4xl font-bold">75</p>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-800">
            Recent Activities
          </h3>
          <ul className="mt-6 space-y-6">
            <li className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-500 text-white p-2 rounded-full">
                  <i className="fas fa-user"></i>
                </div>
                <div>
                  <p className="font-semibold text-lg">
                    User JohnDoe signed in
                  </p>
                  <p className="text-sm text-gray-600">2 hours ago</p>
                </div>
              </div>
            </li>
            <li className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-500 text-white p-2 rounded-full">
                  <i className="fas fa-cogs"></i>
                </div>
                <div>
                  <p className="font-semibold text-lg">
                    System update completed
                  </p>
                  <p className="text-sm text-gray-600">5 hours ago</p>
                </div>
              </div>
            </li>
            <li className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-500 text-white p-2 rounded-full">
                  <i className="fas fa-user-plus"></i>
                </div>
                <div>
                  <p className="font-semibold text-lg">
                    New user registration: JaneSmith
                  </p>
                  <p className="text-sm text-gray-600">1 day ago</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
