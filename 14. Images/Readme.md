<h1  align="center" > 🏕️ 𝚰ꭑα𝗀𝖾𝗌  🏚️ </h1> 

# 🖼️ `<Image />` Tag in Next.js

The `<Image />` component in Next.js (from `next/image`) is a **special optimized image component**  
designed to improve performance by:

- **Automatic resizing** (responsive images 📏)
- **Lazy loading** (load images only when visible 👀)
- **Optimizing formats** (like WebP, AVIF 🔥)
- **Serving smaller file sizes** (faster load times ⚡)

It replaces the normal `<img>` HTML tag to make images **faster and smarter** in Next.js apps.

## 🛠️ Basic Example

```tsx
import Image from 'next/image'

export default function Example() {
   return (
      <Image 
         src="/profile.jpg"    // ✅ Path to image
         alt="Profile Picture" // ✅ Alt text for SEO
         width={500}           // ✅ Width of image
         height={500}          // ✅ Height of image
      />
   )
}
```