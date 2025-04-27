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
