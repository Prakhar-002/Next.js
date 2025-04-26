
<h1  align="center" >📚 𝐀𝗌𝗌𝗂𝗀𐓣ꭑ𝖾𐓣𝗍 🎧 𝚰𐓣𝗌𝗍𝗋υ𝖼𝗍𝗂ⱺ𐓣𝗌 🧋</h1>

### Challenge: Handling Dynamic URL Segments in Next.js

Practice catch all routes segments in Next.js. Your task is to create a route that dynamically processes and displays multiple URL segments.

#### Instructions:

- Inside the `app` directory, create a new folder named `products`.

- Inside the `products` folder, create a folder named `[...slug]`.

- Inside the `[...slug]` folder, create a `page.tsx` file that will render information based on the dynamic segments from the URL.

- Inside `page.tsx`, display the entire `slug` array, showing each segment of the URL dynamically.

</br>

<h1  align="center" > 🏕️ 𝐂ɦαᥣᥣ𝖾𐓣𝗀𝖾 🏚️</h1>

<h3 align="center" > 🐇 Projects/[...Slug] Page  🦚</h3>

```dash
http://localhost:3000/projects/[...slug]/anythingyoulike
```

```TSX
//============ 🗂️products/🗂️[...slug]/⚛️page.tsx ============== 

const Product = async ({ params }: { params: { slug: string[] } }) => {
  const { slug } = await params;

  return (
    <div>
      <h1>Product ID: {slug.join(", ")}</h1>
      <br />
      URL Segments:
      <ul>
        {slug.map((id, index) => (
          <li key={index}>{id}</li>
        ))}
      </ul>
    </div>
  );
};

export default Product;

```
