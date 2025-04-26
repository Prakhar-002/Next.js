<h1  align="center" > 🏕️ 𝐃α𝗌ɦ𝐁ⱺα𝗋ᑯ 𝐏𝗋ⱺ𝗃𝖾𝖼𝗍 🏚️</h1>

<h1  align="center" > 

<img src="https://github.com/user-attachments/assets/378b14e0-f0fb-4e04-9a32-520a8b410ada"/>

</h1>

<h3 align="center" > 🐇 Home Page  🦚</h3>

```dash
http://localhost:3000/
```

```TSX
//============ 🗂️App/⚛️page.tsx ============== 

import Link from "next/link";

const home = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#0f0f10] to-black
      flex flex-col items-center justify-center p-8"
    >
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
          Welcome to the Dashboard App
        </h1>
        <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
          Manage your tasks, track analytics, and stay organized with our
          powerful dashboard.
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center bg-gradient-to-r
            from-purple-600 to-pink-500 text-white px-10 py-4 rounded-2xl
            font-semibold hover:from-pink-600 hover:to-purple-500 transition-all
            duration-300 shadow-lg hover:shadow-2xl"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default home
```

</br>

<h3 align="center" > 🐇 Dashboard Page  🦚</h3>

```dash
http://localhost:3000/dashboard
```

```TSX
//============ 🗂️dashboard/⚛️page.tsx ============== 


export default home

import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-[#16162e] p-8 mt-[5rem]">
      <div className="max-w-6xl mx-auto bg-[#161616] rounded-2xl shadow-2xl p-8 space-y-8">
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-extrabold text-white">Dashboard</h1>
          <p className="text-lg text-gray-400">
            Manage your tasks, view analytics, and tweak your settings.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { href: "dashboard/tasks", title: "Tasks", emoji: "📋", color: "bg-blue-950", hoverColor: "hover:bg-blue-800" },
            { href: "dashboard/analytics", title: "Analytics", emoji: "📊", color: "bg-green-950", hoverColor: "hover:bg-green-800" },
            { href: "dashboard/settings", title: "Settings", emoji: "⚙️", color: "bg-purple-950", hoverColor: "hover:bg-purple-800" },
            { href: "dashboard/users", title: "Users", emoji: "👥", color: "bg-yellow-900", hoverColor: "hover:bg-yellow-800" }
          ].map(({ href, title, emoji, color, hoverColor }) => (
            <Link
              key={href}
              href={href}
              className={`${color} ${hoverColor}  p-6 rounded-xl shadow-md
                              hover:shadow-xl transition-all transform hover:scale-105 text-white`}
            >
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold">{title}</h2>
                <span className="text-2xl">{emoji}</span>
              </div>
              <p className="text-gray-400 text-sm">
                {title === "Tasks" && "Organize your daily tasks."}
                {title === "Analytics" && "View performance insights."}
                {title === "Settings" && "Customize your dashboard."}
                {title === "Users" && "Manage your user base."}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

}

export default Dashboard
```

</br>

<h3 align="center" > 🐇 Dashboard/Analytics page  🦚</h3>

```dash
http://localhost:3000/dashboard/analytics
```

```TSX
//============ 🗂️dashboard/🗂️analytics/⚛️page.tsx ============== 

const Analytic = () => {
  const metrics = [
    {
      title: "Total Sales",
      value: "$120,000",
      change: "+12%",
      isPositive: true,
    },
    { title: "Active Users", value: "1,200", change: "-8%", isPositive: false },
    {
      title: "Website Visits",
      value: "8,500",
      change: "+5%",
      isPositive: true,
    },
    { title: "New Sign-Ups", value: "350", change: "+18%", isPositive: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-[#0f0f10] p-8">
      <div className="max-w-7xl mx-auto bg-[#161616] rounded-lg shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-white mb-8">Analytics Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className={`flex justify-between items-center 
                                          rounded-lg shadow-md p-6 border-l-4 
                                          ${metric.isPositive ? "border-green-400 bg-green-950" : "border-red-400 bg-red-950"}`}
            >
              <div>
                <h3 className="text-xl font-semibold text-white">{metric.title}</h3>
                <p className="text-lg text-gray-300 mt-2">{metric.value}</p>
              </div>
              <div className="text-right">
                <p className={`text-sm mt-2 ${metric.isPositive ? "text-green-300" : "text-red-300"}`}>
                  {metric.change}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-pink-400 mb-4">Website Traffic</h2>
          <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-lg h-72 flex items-center justify-center text-white font-semibold">
            Chart Placeholder
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-teal-400 mb-4">User Sign-Ups</h2>
          <div className="bg-gradient-to-r from-teal-900 to-cyan-700 rounded-lg h-72 flex items-center justify-center text-white font-semibold">
            Chart Placeholder
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-rose-400 mb-4">Recent Activity</h2>
          <ul className="space-y-4">
            {[
              {
                title: "User Registration",
                desc: "New user signed up on 2025-02-16",
                value: "+10 Users",
                color: "bg-blue-900",
              },
              {
                title: "Sales Increase",
                desc: "Sales grew by 12% on 2025-02-14",
                value: "+$15,000",
                color: "bg-green-900",
              },
              {
                title: "Website Traffic Surge",
                desc: "Traffic increased by 8% on 2025-02-13",
                value: "+200 Visits",
                color: "bg-purple-900",
              },
            ].map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center justify-between ${item.color} rounded-lg shadow-md p-4`}
              >
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">{item.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );


}

export default Analytic
```

</br>

<h3 align="center" > 🐇 Dashboard/settings page  🦚</h3>

```dash
http://localhost:3000/dashboard/settings
```

```TSX
//============ 🗂️dashboard/🗂️settings/⚛️page.tsx ============== 

import Link from "next/link"

const Settings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0f0f10] to-gray-900 p-10">
      <div className="max-w-7xl mx-auto bg-[#141416] bg-opacity-90 backdrop-blur-md rounded-2xl shadow-2xl p-10">

        <h1 className="text-4xl font-extrabold text-white mb-8 tracking-tight">
          Settings
        </h1>

        <div className="flex gap-10">

          {/* Sidebar */}
          <div className="w-1/4 bg-[#1c1c1f] rounded-xl p-6 shadow-lg space-y-6">
            <h2 className="text-2xl font-semibold text-indigo-400 mb-4">
              Quick Links
            </h2>
            <ul className="space-y-3">
              {[
                { href: "/dashboard/settings/account", label: "Account", color: "text-indigo-400", hover: "hover:bg-indigo-900" },
                { href: "/dashboard/settings/notifications", label: "Notifications", color: "text-yellow-400", hover: "hover:bg-yellow-900" },
                { href: "/dashboard/settings/profile", label: "Profile", color: "text-green-400", hover: "hover:bg-green-900" }
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className={`flex items-center text-lg text-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105 py-2 px-4 rounded-md ${item.hover}`}
                  >
                    <span className={`${item.color}`}>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Panel */}
          <div className="flex-1 bg-[#1c1c1f] rounded-xl shadow-lg p-10 space-y-6">
            <h2 className="text-3xl font-bold text-pink-400 tracking-wide">
              Select a Setting
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Manage your account, notifications, or profile settings easily from here.
            </p>
          </div>

        </div>

      </div>
    </div>
  );


}

export default Settings
```

</br>

<h3 align="center" > 🐇 Dashboard/Settings/Account page  🦚</h3>

```dash
http://localhost:3000/dashboard/settings/account
```

```TSX
//============ 🗂️dashboard/🗂️settings/🗂️account/⚛️page.tsx ============== 

const Account = () => {
  // Common style definitions
  const commonStyles = {
    input: "w-full px-5 py-3 rounded-lg border shadow-sm focus:outline-none transition",
    label: "block text-sm font-medium mb-1 text-white",
    button: "px-6 py-3 rounded-lg transition-all duration-300",
  };

  const settingsData = [
    {
      title: "Profile Information",
      fields: [
        { label: "Name", defaultValue: "John Doe", type: "text" },
        { label: "Email", defaultValue: "john.doe@example.com", type: "email" },
      ],
      inputStyle: "focus:ring-4 border-teal-600 focus:ring-teal-500",
      titleColor: "text-teal-400"
    },
    {
      title: "Security",
      fields: [
        { label: "Password", placeholder: "Enter new password", type: "password" },
        { label: "Confirm Password", placeholder: "Confirm new password", type: "password" },
      ],
      inputStyle: "focus:ring-4 border-pink-600 focus:ring-pink-500",
      titleColor: "text-pink-400"
    },
  ];

  const buttonStyles = [
    {
      label: "Cancel",
      className: "bg-gray-700 text-gray-200 hover:bg-gray-600",
    },
    {
      label: "Save Changes",
      className: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700",
    },
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0f0f10] to-gray-900 p-8">
      <div className="max-w-4xl mx-auto bg-[#141416] backdrop-blur-lg rounded-2xl shadow-2xl p-10 space-y-10">
        <h1 className="text-4xl font-extrabold text-white mb-8 tracking-tight">Account Settings</h1>

        {settingsData.map((section, idx) => (
          <div key={idx} className="mb-10">
            <h2 className={`text-2xl font-semibold ${section.titleColor} mb-6`}>{section.title}</h2>
            <div className="space-y-6">
              {section.fields.map((field, idx) => (
                <div key={idx}>
                  <label className={commonStyles.label}>{field.label}</label>
                  <input
                    type={field.type}
                    defaultValue={field.defaultValue}
                    placeholder={field.placeholder}
                    className={`${commonStyles.input} ${section.inputStyle}`}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="flex justify-end gap-4">
          {buttonStyles.map((btn, idx) => (
            <button key={idx} className={`${commonStyles.button} ${btn.className}`}>
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

};

export default Account;

```

</br>

<h3 align="center" > 🐇 Dashboard/Settings/Notifications page  🦚</h3>

```dash
http://localhost:3000/dashboard/settings/notifications
```

```TSX
//============ 🗂️dashboard/🗂️settings/🗂️notifications/⚛️page.tsx ============== 

const Notifications = () => {
  const notificationFields = [
    { label: "Email Notifications", options: ["Enabled", "Disabled"] },
    { label: "SMS Notifications", options: ["Enabled", "Disabled"] },
    { label: "Push Notifications", options: ["Enabled", "Disabled"] },
  ];

  const buttonStyles = [
    { label: "Cancel", className: "text-gray-700 bg-gray-100 hover:bg-gray-200" },
    { label: "Save Changes", className: "text-white bg-blue-600 hover:bg-blue-700" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0f0f10] to-gray-900 p-8">
      <div className="max-w-4xl mx-auto bg-[#141416] backdrop-blur-lg rounded-2xl shadow-2xl p-10 space-y-10">
        <h1 className="text-4xl font-extrabold text-white mb-8 tracking-tight">Notifications</h1>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Notification Preferences</h2>
          <div className="space-y-6">
            {notificationFields.map((field, idx) => (
              <div key={idx}>
                <label className="block text-sm font-medium text-gray-400">{field.label}</label>
                <select
                  className="mt-1 block w-full px-4 py-2 bg-[#2e2e31] text-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {field.options.map((option, idx) => (
                    <option key={idx}>{option}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end space-x-6">
          {buttonStyles.map((btn, idx) => (
            <button key={idx} className={`px-6 py-2 rounded-lg ${btn.className}`}>
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

};

export default Notifications;
```

</br>

<h3 align="center" > 🐇 Dashboard/Settings/Profile page  🦚</h3>

```dash
http://localhost:3000/dashboard/settings/profile
```

```TSX
//============ 🗂️dashboard/🗂️settings/🗂️profile/⚛️page.tsx ============== 

const Profile = () => {
  const profileFields = [
    { label: "Full Name", type: "text", defaultValue: "Prakhar katiyar" },
    { label: "Username", type: "text", defaultValue: "Prakhar_002" },
    { label: "Email Address", type: "email", defaultValue: "prakhar.002@example.com" },
  ];

  const actionButtons = [
    { label: "Cancel", className: "text-gray-300 bg-gray-700 hover:bg-gray-600" },
    { label: "Save Changes", className: "text-white bg-blue-600 hover:bg-blue-700" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0f0f10] to-gray-900 p-8">
      <div className="max-w-4xl mx-auto bg-[#141416] backdrop-blur-lg rounded-2xl shadow-2xl p-10 space-y-12">
        <h1 className="text-4xl font-extrabold text-white mb-8 tracking-tight">
          Profile Settings
        </h1>

        {/* Profile Picture */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-200">
            Profile Picture
          </h2>
          <div className="flex items-center space-x-6">
            <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-700 shadow-md">
              <img
                src="https://avatars.githubusercontent.com/u/136890202?v=4"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
              Change Picture
            </button>
          </div>
        </div>

        {/* Profile Information */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-gray-200">
            Profile Information
          </h2>
          <div className="space-y-6">
            {profileFields.map((field, idx) => (
              <div key={idx}>
                <label className="block mb-2 text-sm font-medium text-gray-400">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  defaultValue={field.defaultValue}
                  className="w-full px-4 py-3 bg-[#1c1c1f] text-white border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 pt-6">
          {actionButtons.map((btn, idx) => (
            <button
              key={idx}
              className={`px-6 py-2 rounded-lg transition font-semibold ${btn.className}`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );


};

export default Profile;
```

</br>

<h3 align="center" > 🐇 Dashboard/Tasks page  🦚</h3>

```dash
http://localhost:3000/dashboard/tasks
```

```TSX
//============ 🗂️dashboard/🗂️tasks/⚛️page.tsx ============== 

const Tasks = () => {
  const tasks = [
    {
      id: 1,
      title: "Launch marketing campaign",
      description: "Design and launch a creative social media campaign for the new product.",
      status: "Pending",
      dueDate: "2025-02-24",
    },
    {
      id: 2,
      title: "Prototype a new feature",
      description: "Develop a quick prototype for the AI-driven search feature.",
      status: "In Progress",
      dueDate: "2025-02-22",
    },
    {
      id: 3,
      title: "Host a live Q&A session",
      description: "Organize and host a live session answering user questions about the platform.",
      status: "Pending",
      dueDate: "2025-02-27",
    },
    {
      id: 4,
      title: "Research competitor strategies",
      description: "Analyze top 5 competitors and create a summary of their best strategies.",
      status: "Pending",
      dueDate: "2025-02-23",
    },
    {
      id: 5,
      title: "Design interactive demo",
      description: "Create an interactive demo page showcasing key product features.",
      status: "In Progress",
      dueDate: "2025-02-26",
    }
  ];

  const statusColors = {
    "Completed": { border: "border-green-500", bg: "bg-green-100", text: "text-green-600" },
    "In Progress": { border: "border-yellow-500", bg: "bg-yellow-100", text: "text-yellow-600" },
    "Pending": { border: "border-red-500", bg: "bg-red-100", text: "text-red-600" },
  };

  const actionButtons = [
    { label: "Edit", className: "bg-blue-600 hover:bg-blue-700 text-white" },
    { label: "Mark as Complete", className: "bg-green-600 hover:bg-green-700 text-white", show: (status) => status !== "Completed" },
    { label: "Delete", className: "bg-gray-700 hover:bg-gray-600 text-gray-200" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0f0f10] to-gray-900 p-8">
      <div className="max-w-7xl mx-auto bg-[#141416] rounded-2xl shadow-2xl p-10 space-y-8 backdrop-blur-lg">
        <h1 className="text-4xl font-bold text-white mb-10 tracking-tight">Tasks</h1>

        <div className="space-y-8">
          {tasks.map((task) => {
            const colors = statusColors[task.status] || statusColors["Pending"];
            return (
              <div
                key={task.id}
                className={`flex flex-col md:flex-row items-start md:items-center justify-between bg-[#1c1c1f] rounded-xl shadow-lg p-8 border-l-4 ${colors.border}`}
              >
                <div className="flex flex-col space-y-3">
                  <h2 className="text-2xl font-semibold text-white">{task.title}</h2>
                  <p className="text-sm text-gray-400">{task.description}</p>
                  <p className="text-sm text-gray-500">Due Date: {task.dueDate}</p>
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-6 md:mt-0">
                  <span className={`px-5 py-2 rounded-full text-sm font-semibold ${colors.bg} ${colors.text}`}>
                    {task.status}
                  </span>

                  {actionButtons.map((btn, idx) => {
                    if (btn.label === "Mark as Complete" && !btn.show(task.status)) return null;
                    return (
                      <button
                        key={idx}
                        className={`px-5 py-2 rounded-lg transition font-semibold ${btn.className}`}
                      >
                        {btn.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

};

export default Tasks;

```

</br>

<h3 align="center" > 🐇 Dashboard/Users page  🦚</h3>

```dash
http://localhost:3000/dashboard/Users
```

```TSX
//============ 🗂️dashboard/🗂️Users/⚛️page.tsx ============== 
import Link from "next/link";

const Users = () => {
  const userLinks = [
    {
      href: "/dashboard/users/users-details",
      title: "User Details",
      desc: "View detailed information about each user in your system.",
      bg: "bg-teal-600",
      text: "text-teal-100",
    },
    {
      href: "/dashboard/users/users-list",
      title: "User List",
      desc: "Browse and manage all users in the system.",
      bg: "bg-rose-600",
      text: "text-rose-100",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f10] p-8">
      <div className="max-w-4xl mx-auto bg-black rounded-2xl shadow-2xl p-10">
        <h1 className="text-4xl font-bold text-pink-400 mb-6">Users</h1>
        <p className="text-lg text-gray-400 mb-10">
          Manage your users here. You can view detailed information or browse a list of users.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {userLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={`${link.bg} p-8 rounded-xl shadow-md hover:shadow-lg hover:shadow-pink-400/30 transition-all duration-300 hover:scale-105`}
            >
              <h2 className={`text-2xl font-semibold ${link.text} mb-2`}>
                {link.title}
              </h2>
              <p className="text-teal-50">{link.desc}</p> {/* <- fixed */}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;

```

</br>

<h3 align="center" > 🐇 Dashboard/Users/UsersDetails page  🦚</h3>

```dash
http://localhost:3000/dashboard/Users/users-details
```

```TSX
//============ 🗂️dashboard/🗂️Users/🗂️users-details/⚛️page.tsx ============== 

const UsersDetails = () => {
  const user = {
    name: "Prakhar Katiyar",
    email: "prakhar.002@example.com",
    role: "Admin",
    status: "Active",
    bio: "Meet Prakhar Katiyar 🙋🏻‍♂️ , An avid learner with a passion for mastering the MERN (MongoDB, Express.js, React.js, Node.js) stack 🎯 and diving deep into Data Structures and Algorithms (DSA) 🧑🏻‍💻.",
    profilePicture: "https://avatars.githubusercontent.com/u/136890202?v=4",
    activities: [
      { id: 1, description: "Updated password", timestamp: "2025-02-10" },
      { id: 2, description: "Changed email address", timestamp: "2025-01-25" },
      { id: 3, description: "Logged in from a new device", timestamp: "2025-01-15" },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0f0f10] p-8">
      <div className="max-w-4xl mx-auto bg-black rounded-2xl shadow-2xl p-10">
        <div className="flex items-center mb-10">
          <img src={user.profilePicture} alt="Profile" className="w-24 h-24 rounded-full object-cover mr-8" />
          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-pink-400">{user.name}</h1>
            <p className="text-gray-400">{user.email}</p>
            <p className="text-gray-400">Role: <span className="text-gray-500">{user.role}</span></p>
            <p className={`mt-1 font-semibold ${user.status === "Active" ? "text-green-500" : "text-rose-500"}`}>
              Status: {user.status}
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-teal-300 mb-4">About</h2>
          <p className="text-gray-400">{user.bio}</p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-rose-300 mb-4">Recent Activities</h2>
          <ul className="space-y-4">
            {user.activities.map((activity) => (
              <li key={activity.id} className="flex items-center space-x-4">
                <div className="bg-pink-400 text-black rounded-full w-9 h-9 flex items-center justify-center font-bold">
                  A
                </div>
                <div>
                  <p className="text-gray-300">{activity.description}</p>
                  <p className="text-sm text-gray-500">{activity.timestamp}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end space-x-4">
          <button className="px-6 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
            Edit Profile
          </button>
          <button className="px-6 py-2 rounded-lg bg-pink-500 text-black hover:bg-pink-400 transition-colors">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersDetails;

```

</br>

<h3 align="center" > 🐇 Dashboard/Users/UsersList page  🦚</h3>

```dash
http://localhost:3000/dashboard/Users/users-list
```

```TSX
//============ 🗂️dashboard/🗂️Users/🗂️users-list/⚛️page.tsx ============== 

const UsersList = () => {
  const users = [
    {
      id: 1,
      name: "Arjuna",
      email: "arjuna@kurukshetra.com",
      role: "Warrior",
      status: "Active",
    },
    {
      id: 2,
      name: "Bhima",
      email: "bhima@kurukshetra.com",
      role: "Warrior",
      status: "Active",
    },
    {
      id: 3,
      name: "Duryodhana",
      email: "duryodhana@kuru.com",
      role: "King",
      status: "Suspended",
    },
    {
      id: 4,
      name: "Karna",
      email: "karna@angadesha.com",
      role: "Warrior",
      status: "Inactive",
    },
    {
      id: 5,
      name: "Draupadi",
      email: "draupadi@panchala.com",
      role: "Queen",
      status: "Active",
    },
    {
      id: 6,
      name: "Krishna",
      email: "krishna@dwarka.com",
      role: "Advisor",
      status: "Active",
    },
  ];

  const getStatusColor = (role) => {
    switch (role) {
      case "Warrior":
        return "text-blue-400";
      case "King":
        return "text-yellow-400";
      case "Queen":
        return "text-pink-400";
      case "Advisor":
        return "text-teal-400";
      default:
        return "text-gray-400";
    }
  };


  return (
    <div className="min-h-screen bg-[#0f0f10] p-8">
      <div className="max-w-7xl mx-auto bg-black border-x-2 border-gray-700 rounded-2xl shadow-2xl p-10">
        <h1 className="text-3xl font-bold text-teal-500 mb-8">Users List</h1>

        <div className="overflow-x-auto rounded-xl shadow-md">
          <table className="min-w-full table-auto text-gray-300">
            <thead className="bg-gray-900 text-pink-500">
              <tr>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Role</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t border-gray-700 hover:bg-[#1a1a1c] transition-all">
                  <td className="py-4 px-6 text-gray-300">{user.name}</td>
                  <td className="py-4 px-6">{user.email}</td>
                  <td className={`py-4 px-6 ${getStatusColor(user.role)}`}>
                    {user.role}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`
                                                            font-semibold
                                                            ${user.status === "Active"
                        ? "text-green-400"
                        : user.status === "Inactive"
                          ? "text-yellow-400"
                          : "text-rose-400"
                      }
                                                      `}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center space-x-2">
                    <button className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors">
                      Edit
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-black transition-colors">
                      View
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

export default UsersList;

```
