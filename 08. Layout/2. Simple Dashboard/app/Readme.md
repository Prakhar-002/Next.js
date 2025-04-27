<h1  align="center" > 🏕️ 𝐒𝗂ꭑρᥣ𝖾 𝐃α𝗌ɦᑲⱺα𝗋ᑯ 🏚️</h1>

</br>

[Layout Simple Dashboard](https://github.com/user-attachments/assets/2f6b6db0-59de-47c7-9cda-f441dcce56bd)

</br>

<h3 align="center" > 🐇 Home Page  🦚</h3>

```dash
http://localhost:3000/
```

```TSX
//============ 🗂️App/⚛️page.tsx ==============

const Home = () => {
  return <div>Home</div>;
};

export default Home;

```

</br>

<h3 align="center" > 🐇 Home Layout Page  🦚</h3>

```dash
http://localhost:3000/
```

```dash
http://localhost:3000/any-fither-route
```

```TSX
//============ 🗂️app/⚛️layout.tsx ==============

import Link from "next/link";
import "./globals.css";

const sidebarLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/users", label: "Users" },
  { href: "/reports", label: "Reports" },
  { href: "/settings", label: "Settings" },
];

const Layout = ({ children }: { children: React.ReactNode }) => (
  <html>
    <body className="font-sans bg-gray-100 text-gray-800">
      <div className="flex min-h-screen">
        {/* <!-- Sidebar --> */}
        <aside className="w-64 bg-gradient-to-b from-black to-gray-900 text-white py-6 px-4 shadow-xl">
          <h1 className="text-3xl font-bold mb-6 text-[#D2691E]">Admin Panel</h1>
          <ul className="space-y-4">
            {sidebarLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block py-3 px-6 rounded-md text-lg hover:bg-[#8B4513] border-l-2 border-[#8B4513] hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* <!-- Main Content --> */}
        <main className="flex-1 p-8 shadow-xl rounded-lg">
          {children}
        </main>
      </div>
    </body>
  </html>
);

export default Layout;

```

</br>

<h3 align="center" > 🐇 Dashboard Page  🦚</h3>

```dash
http://localhost:3000/dashboard
```

```TSX
//============ 🗂️app🗂️dashboard/⚛️page.tsx ==============

const stats = [
  { title: "Total Users", count: "1,200", bg: "bg-blue-500" },
  { title: "Active Sessions", count: "450", bg: "bg-green-500" },
  { title: "Pending Requests", count: "75", bg: "bg-yellow-500" },
];

const activities = [
  { icon: "fas fa-user", text: "User JohnDoe signed in", time: "2 hours ago" },
  { icon: "fas fa-cogs", text: "System update completed", time: "5 hours ago" },
  { icon: "fas fa-user-plus", text: "New user registration: JaneSmith", time: "1 day ago" },
];

const Dashboard = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-black to-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto bg-gradient-to-t from-black to-gray-900  rounded-lg p-8 shadow-xl">
        <h2 className="text-3xl font-semibold text-[#D2691E] mb-6">Dashboard</h2>
        <p className="text-lg text-gray-600 mb-10">
          Welcome to your admin dashboard! Here is a quick overview of your current stats.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map(({ title, count, bg }) => (
            <div
              key={title}
              className={`${bg} text-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300`}
            >
              <h3 className="font-semibold text-xl">{title}</h3>
              <p className="text-4xl font-bold">{count}</p>
            </div>
          ))}
        </div>

        {/* Recent Activities */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-[#D2691E]">Recent Activities</h3>
          <ul className="mt-6 space-y-6">
            {activities.map(({ icon, text, time }, idx) => (
              <li
                key={idx}
                className="bg-gradient-to-r from-black to-gray-900  p-5 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-[#D2691E] text-white p-2 rounded-full">
                    <i className={icon}></i>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{text}</p>
                    <p className="text-sm text-gray-600">{time}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

```

</br>

<h3 align="center" > 🐇 Report Page  🦚</h3>

```dash
http://localhost:3000/report
```

```TSX
//============ 🗂️app/🗂️report/⚛️page.tsx ==============


const reports = [
  { id: "001", title: "Monthly Sales Report", date: "February 2025", status: "Completed" },
  { id: "002", title: "Annual Revenue Report", date: "January 2025", status: "Pending" },
];

const Reports = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-black to-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto bg-gradient-to-tr from-black to-gray-900 shadow-xl rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-[#D2691E] ">Reports</h2>
        <p className="text-gray-400 mb-10 text-lg">View detailed reports here.</p>

        {/* Summary and Button */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-semibold text-[#D2691E]">Report Summary</h3>
            <p className="text-gray-400 text-sm">Here is an overview of the latest report data.</p>
          </div>
          <button className="bg-[#D2691E] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#8B4513] transform transition-all duration-300">
            Download Report
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-black border-x-2 border-[#D2691E] shadow-lg rounded-lg">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gradient-to-r from-black to-gray-900">
                {['Report ID', 'Title', 'Date', 'Status', 'Actions'].map((header, index) => (
                  <th
                    key={index}
                    className="py-3 px-6 text-left text-sm font-semibold text-[#D2691E]"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {reports.map(({ id, title, date, status }) => (
                <tr key={id} className="border-t border-gray-700 hover:bg-[#2f2f2f]">
                  <td className="py-4 px-6 text-sm text-gray-300">{id}</td>
                  <td className="py-4 px-6 text-sm text-gray-300">{title}</td>
                  <td className="py-4 px-6 text-sm text-gray-300">{date}</td>
                  <td className="py-4 px-6 text-sm text-gray-300">{status}</td>
                  <td className="py-4 px-6 text-sm">
                    <button className="text-blue-500 hover:text-blue-700 transition-all duration-300">
                      View
                    </button>
                    <span className="mx-2">|</span>
                    <button className="text-[#D2691E] hover:text-[#8B4513] transition-all duration-300">
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );

};

export default Reports;

```

</br>

<h3 align="center" > 🐇 Setting Page  🦚</h3>

```dash
http://localhost:3000/setting
```

```TSX
//============ 🗂️app/🗂️setting/⚛️page.tsx ==============

const accountFields = [
  { label: "Username", type: "text", placeholder: "Enter new username" },
  { label: "Email", type: "email", placeholder: "Enter new email" },
];

const notificationFields = [
  { id: "email-notifications", label: "Receive email notifications" },
  { id: "sms-notifications", label: "Receive SMS notifications" },
];

const Settings = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-black to-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto bg-gradient-to-l from-black to-gray-900 shadow-xl rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-[#D2691E] mb-6">Settings</h2>
        <p className="text-gray-300 mb-10 text-lg">Adjust your preferences here.</p>

        {/* Account Settings Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-[#D2691E] mb-6">Account Settings</h3>
          <div className="space-y-6">
            {accountFields.map(({ label, type, placeholder }) => (
              <div key={label}>
                <label className="block text-sm font-medium text-gray-400 mb-2">{label}</label>
                <input
                  type={type}
                  className="block w-full px-4 py-3 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D2691E]"
                  placeholder={placeholder}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Notification Preferences Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-[#D2691E] mb-6">Notification Preferences</h3>
          <div className="space-y-6">
            {notificationFields.map(({ id, label }) => (
              <div key={id} className="flex items-center">
                <input
                  type="checkbox"
                  id={id}
                  className="mr-3 text-[#D2691E] focus:ring-[#D2691E]"
                />
                <label htmlFor={id} className="text-sm text-gray-400">{label}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Save Changes Button */}
        <div className="flex justify-end">
          <button className="bg-[#D2691E] text-white px-8 py-3 rounded-lg shadow-lg hover:bg-[#8B4513] transition-all duration-300">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );

};

export default Settings;

```

</br>

<h3 align="center" > 🐇 Users Page  🦚</h3>

```dash
http://localhost:3000/users
```

```TSX
//============ 🗂️app🗂️users/⚛️page.tsx ==============

// Reusable User Row Component
const UserRow = ({ user }: { user: { name: string; email: string; role: string } }) => {
  return (
    <tr className="border-t border-gray-100 hover:bg-gray-50">
      <td className="py-4 px-6 text-sm text-gray-800">{user.name}</td>
      <td className="py-4 px-6 text-sm text-gray-600">{user.email}</td>
      <td className="py-4 px-6 text-sm text-gray-600">{user.role}</td>
      <td className="py-4 px-6 text-sm">
        <button className="text-blue-600 hover:text-blue-800 font-medium transition duration-300">
          Edit
        </button>
        <span className="mx-2">|</span>
        <button className="text-red-600 hover:text-red-800 font-medium transition duration-300">
          Delete
        </button>
      </td>
    </tr>
  );
};

const Users = () => {
  // Dummy data for users (in a real app, you'd likely fetch this from an API)
  const users = [
    { name: "John Doe", email: "johndoe@example.com", role: "Admin" },
    { name: "Jane Smith", email: "janesmith@example.com", role: "User" },
    // Add more user data as needed
  ];

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
                {/* Map over the headers array and render each <th> */}
                {['Name', 'Email', 'Role', 'Actions'].map((header, index) => (
                  <th
                    key={index}
                    className="py-3 px-6 text-left text-sm font-semibold text-gray-700"
                  >
                    {header}
                  </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <UserRow key={index} user={user} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;

```
