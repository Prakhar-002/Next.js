<h1  align="center" > 🏕️ 𝐄𝖼ⱺꭑꭑ𝖾𝗋𝖼𝖾 𝐀ρρ 🏚️</h1>

</br>

<h3 align="center" > 🐇 Home Page  🦚</h3>

```dash
http://localhost:3000
```

```TSX
//============ 🗂️App/⚛️page.tsx ============== 

import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home
```

</br>

<h3 align="center" > 🐇 Ecommerce Page  🦚</h3>

```dash
http://localhost:3000/ecommerce
```

```TSX
//============ 🗂️App/🗂️ecommerce/⚛️page.tsx ============== 

import Link from "next/link";

export const products = [
  {
    id: 1,
    name: "Macbook Pro",
    price: "$1000",
    image:
      "https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Football",
    price: "$200",
    image:
      "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Sofa",
    price: "$500",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Ecommerce = () => {
  return (
    <div>
      <section className="m-[4rem] ">
        <div>
          <h1 className="text-3xl mb-3">Ecommerce</h1>
        </div>

        <section className="flex gap-3 ">
          {products.map((product) => (
            <div className="w-[200px] border p-[1rem]" key={product.id}>
              <Link href={`/ecommerce/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.price}</p>
              </Link>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default Ecommerce;

```

</br>

<h3 align="center" > 🐇 Ecommerce  layout  🦚</h3>

```dash
http://localhost:3000/ecommerce
```

```TSX
//============ 🗂️App/🗂️ecommerce/⚛️layout.tsx ============== 

const EcommerceLayout = ({
  children,
  product,
}: {
  children: React.ReactNode;
  product: string;
}) => {
  return (
    <div>
      {children}
      {product}
    </div>
  );
};
export default EcommerceLayout;

```

</br>

<h3 align="center" > 🐇 Ecommerce / [product] Page  🦚</h3>

```dash
http://localhost:3000/ecommerce/[product]
```

```TSX
//============ 🗂️App/🗂️ecommerce/🗂️[product]/⚛️page.tsx ============== 

import { products } from "../page";

const Product = async ({ params }: { params: { product: string } }) => {
  const { product } = await params;

  const findProduct = products.find((f) => f.id === +product);
  //   console.log("--------- findProduct", findProduct);

  return (
    <div className="m-[4rem]">
      <h1 className="text-3xl mb-[1rem]">{findProduct?.name}</h1>

      <img
        src={findProduct?.image}
        alt={findProduct?.name}
        className="w-[40rem]"
      />

      <p className="text-2xl mt-[1rem]">Price: ${findProduct?.price}</p>
    </div>
  );
};

export default Product;

```

</br>

<h3 align="center" > 🐇 Ecommerce / @Product Default Page 🦚</h3>

```dash
http://localhost:3000/ecommerce
```

```TSX
//============ 🗂️App/🗂️ecommerce/🗂️@product/⚛️default.tsx ============== 

const Default = () => {
  return null;
};
export default Default;

```

</br>

<h3 align="center" > 🐇 Ecommerce / @Product / (.)[Product] Page 🦚</h3>

```dash
http://localhost:3000/ecommerce
```

```TSX
//============ /🗂️ecommerce/🗂️@product/🗂️(.)[product]/⚛️page.tsx ============== 

import { products } from "../../page";

const InterceptedProductOne = async ({
  params,
}: {
  params: { product: string };
}) => {
  const { product } = await params;

  const findProduct = products.find((f) => f.id === +product);

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center relative">
          <h1 className="text-3xl mb-4">{findProduct?.name}</h1>

          <img
            src={findProduct?.image}
            alt={findProduct?.name}
            className="w-[40rem] mx-auto rounded-lg"
          />

          <p className="text-2xl mt-4">Price: {findProduct?.price}</p>
        </div>
      </div>
    </>
  );
};

export default InterceptedProductOne;

```
