"use client";

import Password from "@/components/Password";
import Profile from "@/components/Profile";
import Settings from "@/components/Settings";

const Dashboard = () => {
  return (
    <div>
      {/* All of these components are now client
       components because the parent is client component */}
      <Settings />
      <Profile />
      <Password />
    </div>
  );
};

export default Dashboard;
