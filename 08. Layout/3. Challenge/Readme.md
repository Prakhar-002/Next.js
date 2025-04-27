
<h1  align="center" >📚 𝐀𝗌𝗌𝗂𝗀𐓣ꭑ𝖾𐓣𝗍 🎧 𝚰𐓣𝗌𝗍𝗋υ𝖼𝗍𝗂ⱺ𐓣𝗌 🧋</h1>

### Challenge: Layouts in Next.js 14

1. **Create a Basic Layout:**

   - Create a basic layout that contains a common header, footer, and a sidebar.
   - The layout should be reusable for different parts of the site (home page, about page, etc.).
   - The header should have links to the homepage, about page, and contact page.
   - The sidebar should display a list of categories ("Technology", "Design", "Business").
   - The footer should contain some basic copyright information.

2. **Create Different Layouts for Specific Pages:**
   - **Admin Layout:** Create an admin layout with a different structure for the admin section of the site.
     - The layout should have a header, a sidebar with admin-specific options ("Dashboard", "Users", "Settings").
     - Use the layout only for pages in the `/admin` directory.
   - **Public Layout:** Use the first layout (from Step 1) for the rest of the public-facing pages (e.g., home, about, contact).
3. **Dynamic Content Based on Layout:**

   - For each page using the layouts, ensure that dynamic content is rendered inside the main content area of the layout (i.e., below the header and beside the sidebar).

4. **Custom Layout for a Specific Page:**

   - Create a specific layout for a blog post page that contains:
     - A custom header with the title of the blog post.
     - A main content area that dynamically loads the blog post.
     - A sidebar showing recent posts.

</br>

<h1  align="center" > 🏕️ 𝐂ɦαᥣᥣ𝖾𐓣𝗀𝖾 🏚️</h1>

</br>

[Layout Challenge](https://github.com/user-attachments/assets/88fcf880-1045-4ec9-9d17-e5fead3f17df)

</br>

<h3 align="center" > 🐇 Home Page  🦚</h3>

```dash
http://localhost:3000/
```

```TSX
//============ 🗂️app/⚛️page.tsx ============== 

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <p>This is the main public page of the website.</p>
    </div>
  );
};

export default HomePage;

```

</br>

<h3 align="center" > 🐇 Home / Layout Page  🦚</h3>

```dash
http://localhost:3000/
```

```TSX
//============ 🗂️app/⚛️layout.tsx ============== 

import Link from "next/link";
import "./globals.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const categories = [
  { href: "/category/technology", label: "Technology" },
  { href: "/category/design", label: "Design" },
  { href: "/category/business", label: "Business" },
];

const BaseLayout = ({ children }: { children: React.ReactNode }) => (
  <html>
    <body className="bg-black text-white">
      <div className="min-h-screen flex flex-col">
        {/* <!-- Header with gradient effect --> */}
        <header className="bg-gradient-to-r from-black to-purple-900 text-white p-4 shadow-lg">
          <nav>
            <ul className="flex space-x-8 justify-center">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-purple-300 transition duration-300 ease-in-out transform hover:scale-110">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <div className="flex flex-1">
          {/* <!-- Sidebar with sleek design --> */}
          <aside className="w-64 bg-gradient-to-b from-black to-purple-900 p-4 shadow-md">
            <ul className="space-y-4">
              {categories.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="block py-3 px-4 rounded-md border-l-2 border-purple-600 hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          {/* <!-- Main Content Section --> */}
          <main className="flex-1 p-8 bg-gradient-to-tl from-black to-gray-900 rounded-tl-3xl rounded-bl-3xl shadow-lg">
            {children}
          </main>
        </div>

        {/* <!-- Footer with accent --> */}
        <footer className="bg-gradient-to-r from-black to-purple-900 text-white text-center p-4 mt-4">
          <p>&copy; 2025 Prakhar-002</p>
        </footer>
      </div>
    </body>
  </html>
);

export default BaseLayout;

```

</br>

<h3 align="center" > 🐇 Home / Not Found Page  🦚</h3>

```dash
http://localhost:3000/
```

```TSX
//============ 🗂️app/⚛️not-found.tsx ============== 

const NotFound = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for does not exist.</p>
    </div>
  );
};

export default NotFound;

```

</br>

<h3 align="center" > 🐇 About Page  🦚</h3>

```dash
http://localhost:3000/about
```

```TSX
//============ 🗂️app/🗂️about/⚛️page.tsx ============== 

const About = () => {
  return <div>About</div>;
};

export default About;

```

</br>

<h3 align="center" > 🐇 Contact Page  🦚</h3>

```dash
http://localhost:3000/contact
```

```TSX
//============ 🗂️app/🗂️contact/⚛️page.tsx ============== 

const Contact = () => {
  return <div>Contact</div>;
};

export default Contact;

```

</br>

<h3 align="center" > 🐇 Admin Layout Page  🦚</h3>

```dash
http://localhost:3000/admin
```

```dash
http://localhost:3000/admin/any-futher-route
```

```TSX
//============ 🗂️app/🗂️admin/⚛️layout.tsx ============== 

import Link from "next/link";
import "../globals.css";

const navLinks = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/settings", label: "Settings" },
];

const AdminLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-black text-white">
    {/* Header */}
    <header className="bg-gradient-to-r from-black to-purple-900 p-6 shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">Admin Panel</h1>
      <nav>
        <ul className="flex justify-around space-x-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="hover:text-purple-600 transition duration-300 ease-in-out transform hover:scale-110"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>

    {/* Main Content */}
    <div className="flex flex-1">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-tl from-purple-900 to-black p-6 shadow-md">
        <ul className="space-y-4">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block py-3 px-4 rounded-lg  bg-gradient-to-l from-purple-900 to-black border-l-2 border-purple-600 transition duration-300 ease-in-out transform hover:scale-105"
              >
                {label === "Users" ? "Manage Users" : label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 bg-gradient-to-tl from-black to-gray-900 rounded-bl-3xl shadow-lg">
        {children}
      </main>
    </div>

    {/* Footer */}
    <footer className="bg-gradient-to-r from-black to-purple-900 text-white text-center p-4">
      <p className="text-sm">&copy; 2025 Admin Panel</p>
    </footer>
  </div>

);

export default AdminLayout;

```

</br>

<h3 align="center" > 🐇 Admin / [...slug] Page  🦚</h3>

```dash
http://localhost:3000/admin/[...slug]
```

```TSX
//============ 🗂️app/🗂️admin/🗂️[...slug]/⚛️page.tsx ============== 


const AdminRoute = async ({ params }: { params: { all: string[] } }) => {
  const { slug } = await params;

  return (
    <div className="bg-gradient-to-r from-black-800 to-gray-900 p-8 rounded-xl shadow-lg text-white">
      <h1 className="text-3xl font-bold mb-6">Admin Route</h1>

      <ul className="space-y-4 text-lg">
        {slug.map((p) => (
          <li
            key={p}
            className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg transition duration-300 ease-in-out"
          >
            {p}
          </li>
        ))}
      </ul>
    </div>

  );
};

export default AdminRoute;
```

</br>
```

```TSX
//============ 🗂️app/🗂️admin/🗂️dashboard/⚛️page.tsx ============== 

const DashboardPage = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Welcome to the admin dashboard.</p>
    </div>
  );
};

export default DashboardPage;

```

</br>

<h3 align="center" > 🐇 Blog Page  🦚</h3>

```dash
http://localhost:3000/blog
```

```TSX
//============ 🗂️app/🗂️blog/⚛️page.tsx ============== 

const Blog = () => {
  return <div>Blog</div>;
};
export default Blog;

```

</br>

<h3 align="center" > 🐇 blog Layout Page  🦚</h3>

```dash
http://localhost:3000/blog
```

```dash
http://localhost:3000/blog/any-futher-route
```

```TSX
//============ 🗂️app/🗂️blog/⚛️layout.tsx ============== 


export default BlogLayout;

import Link from "next/link";
import "../globals.css";

const posts = [1, 2, 3];

const BlogLayout = ({ children, title }: { children: React.ReactNode; title: string }) => (
  <div className="min-h-screen flex flex-col">
    <header className="bg-gray-900 text-white p-6">
      <h1 className="text-3xl">{title}</h1>
    </header>

    <div className="flex flex-1">
      <aside className="w-64 bg-gray-200 p-4">
        <ul>
          {posts.map((id) => (
            <li key={id}>
              <Link href={`/blog/${id}`} className="block py-2 hover:bg-gray-300">
                Post {id}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <main className="flex-1 p-6 bg-white">{children}</main>
    </div>
  </div>
);

export default BlogLayout;

```

</br>

<h3 align="center" > 🐇 Blog / 1 Page  🦚</h3>

```dash
http://localhost:3000/blog/1
```

```TSX
//============ 🗂️app/🗂️blog/🗂️1/⚛️page.tsx ============== 

import BlogLayout from "../layout";

const BlogPost = () => {
  return (
    <BlogLayout title="Blog Post 1">
      <h2>Blog Post Title</h2>
      <p>This is the content of the blog post.</p>
    </BlogLayout>
  );
};

export default BlogPost;

```
