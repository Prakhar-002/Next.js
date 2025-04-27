
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
    <body>
      <div className="min-h-screen flex flex-col">
        <header className="bg-purple-800 text-white p-4">
          <nav>
            <ul className="flex space-x-4">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-purple-400">{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <div className="flex flex-1">
          <aside className="w-64 bg-purple-200 p-4">
            <ul>
              {categories.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="block py-2 hover:bg-purple-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          <main className="flex-1 p-6 bg-white">{children}</main>
        </div>

        <footer className="bg-purple-800 text-white text-center p-4 mt-4">
          <p>&copy; 2025 My Website</p>
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
  <div className="min-h-screen flex flex-col">
    <header className="bg-blue-800 text-white p-4">
      <h1 className="text-2xl">Admin Panel</h1>
      <nav>
        <ul className="flex space-x-4">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="hover:text-gray-300">{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>

    <div className="flex flex-1">
      <aside className="w-64 bg-gray-100 p-4">
        <ul>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="block py-2 hover:bg-gray-300">
                {label === "Users" ? "Manage Users" : label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <main className="flex-1 p-6 bg-white">{children}</main>
    </div>

    <footer className="bg-blue-800 text-white text-center p-4 mt-4">
      <p>&copy; 2025 Admin Panel</p>
    </footer>
  </div>
);

export default AdminLayout;

```

</br>

<h3 align="center" > 🐇 Admin / Dashboard Page  🦚</h3>

```dash
http://localhost:3000/admin/dashboard
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
