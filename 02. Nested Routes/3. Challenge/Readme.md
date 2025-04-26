
<h1  align="center" >📚 𝐀𝗌𝗌𝗂𝗀𐓣ꭑ𝖾𐓣𝗍 🎧 𝚰𐓣𝗌𝗍𝗋υ𝖼𝗍𝗂ⱺ𐓣𝗌 🧋</h1>

### Exercise: Nested Routes in Next.js

The goal of this exercise is to demonstrate understanding of how to create nested routes in a Next.js application.

#### Instructions:

1. Create a "products" route and inside that same folder create two more folders name "allproducts" & "specificproduct"
2. Inside the "allproducts" folder create a component which will show this text: "(1220) products in the store"
3. Inside the "specificproduct" folder create a component which will show this text: "Here is my one & only product"

</br>

<h1  align="center" > 🏕️ 𝐂ɦαᥣᥣ𝖾𐓣𝗀𝖾 🏚️</h1>

<h3 align="center" > 🐇 Home Page  🦚</h3>

```dash
http://localhost:3000/
```

```TSX
//============ 🗂️App/⚛️page.tsx ============== 

const Home = () => {
  return <div>Home</div>;
};

export default Home;

```

</br>

<h3 align="center" > 🐇 Products Page  🦚</h3>

```dash
http://localhost:3000/products
```

```TSX
//============ 🗂️products/⚛️page.tsx ============== 

const Products = () => {
  return (
    <div>
      <p>You can view all the products by going to /products/allproducts</p>
      <p>You can view specific product by going to /products/specificproduct</p>
    </div>
  );
};
export default Products;

```

</br>

<h3 align="center" > 🐇 Products/AllProducts page  🦚</h3>

```dash
http://localhost:3000/products/allproducts
```

```TSX
//============ 🗂️products/🗂️allproducts/⚛️page.tsx ============== 

const AllProducts = () => {
  return <h1>(1220) products in the store</h1>;
};

export default AllProducts;

```

</br>

<h3 align="center" > 🐇 Products/SpecificProduct page  🦚</h3>

```dash
http://localhost:3000/products/specificproduct
```

```TSX
//============ 🗂️products/🗂️specificproduct/⚛️page.tsx ============== 

const SpecificProduct = () => {
  return <h1>Here is my one & only product</h1>;
};

export default SpecificProduct;

```
