const UsersDetails = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor.",
    profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
    activities: [
      { id: 1, description: "Updated password", timestamp: "2025-02-10" },
      { id: 2, description: "Changed email address", timestamp: "2025-01-25" },
      {
        id: 3,
        description: "Logged in from a new device",
        timestamp: "2025-01-15",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <div className="flex items-center mb-8">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover mr-6"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-600">Role: {user.role}</p>
            <p
              className={`text-sm mt-2 ${user.status === "Active" ? "text-green-500" : "text-red-500"
                }`}
            >
              Status: {user.status}
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">About</h2>
          <p className="text-gray-600">{user.bio}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Recent Activities
          </h2>
          <ul className="space-y-4">
            {user.activities.map((activity) => (
              <li key={activity.id} className="flex items-center space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                  <span className="text-sm">A</span>
                </div>
                <div>
                  <p className="text-gray-700">{activity.description}</p>
                  <p className="text-sm text-gray-500">{activity.timestamp}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end space-x-4">
          <button className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            Edit Profile
          </button>
          <button className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersDetails;
