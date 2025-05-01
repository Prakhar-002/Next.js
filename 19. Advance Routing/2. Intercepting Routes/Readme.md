<h1  align="center" > 🏕️ 𝚰𐓣𝗍𝖾𝗋𝖼𝖾ρ𝗍𝗂𐓣𝗀 𝐑ⱺυ𝗍𝖾𝗌 🏚️ </h1>

**Intercepting Routes** in Next.js allow you to **render a route from outside its normal hierarchy** —  
like showing a modal or sidebar while **preserving the current layout** and route context.

💡 Use Case: Open a product preview modal from `/products`, while staying on the same page.

</br>

## 🧱 Folder Structure Example

      🗂️app/
      |
      ├─ 🗂️products/
      |  |
      │  └─ ⚛️page.tsx
      |  
      ├─ 🗂️modals/
      │  └─ 🗂️product/
      │     └─ ⚛️page.tsx
      |  
      ├─ 🗂️(.)products/
      │  └─ 🗂️@modal/
      │     └─ 🗂️product/
      │        └─ ⚛️page.tsx  ← Intercepting route

</br>

| Syntax         | Purpose                                 |
|----------------|------------------------------------------|
| `(.)`          | Intercepts from the **same level**       |
| `(..)`         | Intercepts from **one level up**         |
| `(...)`        | Intercepts from **root**                 |