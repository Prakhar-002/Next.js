<h1  align="center" > 🏕️ 𝐅ⱺ𐓣𝗍𝗌 🏚️ </h1>

# 🔤 Fonts in Next.js

In **Next.js**, you can easily **add and optimize fonts** (especially **Google Fonts**) using the built-in  
`next/font` package in the **App Router (`app/`)**.

It helps you:
- Load **fonts locally** or from **Google Fonts** 📦
- **Optimize** fonts automatically (performance boost) 🚀
- **Reduce CLS (Cumulative Layout Shift)** for better UX 🎯
- Apply fonts easily without writing custom `<link>` tags

</br>

## 🛠️ Basic Example with Google Fonts

```tsx
// app/layout.tsx
import { Inter } from 'next/font/google'

// Load the font
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className={inter.className}>
            {children}
         </body>
      </html>
   )
}

</br>

<h3 align="center" > 🐇 Home Page  🦚</h3>

```dash
http://localhost:3000/
```

```TSX
//============ 🗂️App/⚛️page.tsx ============== 

import { Bebas_Neue } from "next/font/google";

const bebasFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const Home = () => {
  return (
    <main>
      <h1>Bebas Neue</h1>
      <p className={`${bebasFont.className}`}>This is some random text.</p>
    </main>
  );
};

export default Home;

```
