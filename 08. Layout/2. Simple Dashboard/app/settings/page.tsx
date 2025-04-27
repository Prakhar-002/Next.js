const Settings = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Settings</h2>
        <p className="text-gray-600 mb-10 text-lg">
          Adjust your preferences here.
        </p>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Account Settings
          </h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter new username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter new email"
              />
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Notification Preferences
          </h3>
          <div className="space-y-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="email-notifications"
                className="mr-3 text-blue-500 focus:ring-blue-500"
              />
              <label
                htmlFor="email-notifications"
                className="text-sm text-gray-600"
              >
                Receive email notifications
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="sms-notifications"
                className="mr-3 text-blue-500 focus:ring-blue-500"
              />
              <label
                htmlFor="sms-notifications"
                className="text-sm text-gray-600"
              >
                Receive SMS notifications
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
