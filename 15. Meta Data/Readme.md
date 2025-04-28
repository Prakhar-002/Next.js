<h1  align="center" > 🏕️ 𝐌𝖾𝗍α 𝐃α𝗍α 🏚️ </h1>

**Meta Data** in Next.js refers to **information about a page** that helps browsers, search engines, and social platforms  
**understand the content** of your page.

- Improves **SEO** (Search Engine Optimization) 📈
- Controls **social media previews** (like link thumbnails) 🖼️
- Defines **page titles, descriptions, icons, Open Graph tags**, etc. 🔖

In Next.js **App Router (app/ directory)**, you define meta data using a special **`metadata` object** inside your page or layout files.

</br>

## 🛠️ Basic Example of Meta Data

```tsx
// app/page.tsx
export const metadata = {
   title: 'Home Page',            // 🏠 Title of the page
   description: 'Welcome to my site', // 📜 Description for search engines
}

export default function HomePage() {
   return (
      <main>
         <h1>Welcome to Home Page</h1>
      </main>
   )
}
