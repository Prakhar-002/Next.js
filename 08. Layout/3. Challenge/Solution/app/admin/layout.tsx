import Link from "next/link";
import "../globals.css";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-800 text-white p-4">
        <h1 className="text-2xl">Admin Panel</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/admin/dashboard" className="hover:text-gray-300">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/admin/users" className="hover:text-gray-300">
                Users
              </Link>
            </li>
            <li>
              <Link href="/admin/settings" className="hover:text-gray-300">
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="flex flex-1">
        <aside className="w-64 bg-gray-100 p-4">
          <ul>
            <li>
              <Link
                href="/admin/dashboard"
                className="block py-2 hover:bg-gray-300"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/admin/users"
                className="block py-2 hover:bg-gray-300"
              >
                Manage Users
              </Link>
            </li>
            <li>
              <Link
                href="/admin/settings"
                className="block py-2 hover:bg-gray-300"
              >
                Settings
              </Link>
            </li>
          </ul>
        </aside>

        <main className="flex-1 p-6 bg-white">{children}</main>
      </div>

      <footer className="bg-blue-800 text-white text-center p-4 mt-4">
        <p>&copy; 2025 Admin Panel</p>
      </footer>
    </div>
  );
};

export default AdminLayout;
