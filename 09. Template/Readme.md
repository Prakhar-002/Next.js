<h1  align="center" > 🏕️ 𝐓𝖾ꭑρᥣα𝗍𝖾  🏚️ </h1>

</br>

<h3  align="center" > 

## 📄 Difference between `layout.tsx` and `template.tsx`

| 🔹 Feature             | 🏛️ `layout.tsx`                                                                          | 🧩 `template.tsx`                                                                 |
|------------------------|------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| **🎯 Purpose**          | Defines the **static layout** (header, footer, sidebar) for all pages in a route.         | Defines a **dynamic layout** for each instance of a dynamic route.                |
| **⚡ Rendering**        | Rendered **once** and **shared** across all child pages.                                  | Rendered **separately** for **each dynamic page instance**.                       |
| **🗂️ Caching**          | **Highly cacheable** because it is static and doesn’t depend on dynamic data.             | **Less cacheable** because it often uses dynamic content.                         |
| **🛠️ Use Case**         | Persistent structure like **navigation bars, sidebars, and footers** across pages.        | Different layouts for **dynamic pages** like **blog posts, user profiles**, etc.  |
| **📝 Example**          | Sidebar and footer appearing on **every page**.                                            | Each blog post page having a **custom wrapper**.                                  |
| **📂 Location**         | `/app/layout.tsx`                                                                          | `/app/[slug]/template.tsx`                                                        |

</br>

### 📝 Quick Summary

- `layout.tsx` ➔ Static, shared layout across pages.
- `template.tsx` ➔ Dynamic, instance-specific layout for dynamic routes.

</h3>

</br>

![1](https://github.com/user-attachments/assets/01844f86-e7be-4cec-b7dd-b15e1d242ee8)
![2](https://github.com/user-attachments/assets/9ec95033-2b44-4288-b47c-b7f3b786bc3a)
![3](https://github.com/user-attachments/assets/e6ddc76d-8ee1-45cb-b10e-2e8b4253ae4f)
![4](https://github.com/user-attachments/assets/78a6a2af-7710-4689-9002-0198b0a10682)
![5](https://github.com/user-attachments/assets/fa0cbb3a-20d1-4af1-b5fb-3d61544b58c0)
