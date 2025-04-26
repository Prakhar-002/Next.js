import Link from "next/link";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/dashboard/settings">Settings</Link>
          </li>
          <li>
            <Link href="/dashboard/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Dashboard;
