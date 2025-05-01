<h1  align="center" > 🏕️ 𝐖𝗂𝗍ɦⱺυ𝗍 𝐏α𝗋αᥣᥣ𝖾ᥣ 𝐑ⱺυ𝗍𝖾𝗌 🏚️</h1>

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
      <section className="m-[4rem]">
        <div>
          <h1 className="text-3xl mb-3">Ecommerce</h1>
        </div>

        <section className="flex gap-3">
          {products.map((product) => (
            <div className="w-[200px] border" key={product.id}>
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

<h3 align="center" > 🐇 Ecommerce / 1 Page  🦚</h3>

```dash
http://localhost:3000/ecommerce/1
```

```TSX
//============ 🗂️App/🗂️ecommerce/🗂️1/⚛️page.tsx ============== 

const ProductOne = () => {
  return (
    <div className="m-[4rem]">
      <h1 className="text-3xl mb-[1rem]">Macbook Pro</h1>

      <img
        src="https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070"
        alt="Macbook Pic"
        className="w-[40rem]"
      />

      <p className="text-2xl mt-[1rem]">Price: $1000</p>
    </div>
  );
};

export default ProductOne;

```

</br>

<h3 align="center" > 🐇 Ecommerce / (.)1 Page  🦚</h3>

```dash
http://localhost:3000/ecommerce
```

```TSX
//============ 🗂️App/🗂️ecommerce/🗂️(.)1/⚛️page.tsx ============== 

"use client";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const InterceptedProductOne = () => {
  const router = useRouter();

  const closeModal = () => router.push("/ecommerce");

  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        onClick={closeModal}
      >
        <div
          className="bg-white p-8 rounded-lg shadow-lg text-center relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            onClick={closeModal}
          >
            <X size={24} />
          </button>

          <h1 className="text-3xl mb-4">Macbook Pro</h1>

          <img
            src="https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D&auto=format&fit=crop&w=2070"
            alt="Macbook Pic"
            className="w-[40rem] mx-auto rounded-lg"
          />

          <p className="text-2xl mt-4">Price: $1000</p>
        </div>
      </div>
    </>
  );
};

export default InterceptedProductOne;

```

</br>

<h3 align="center" > 🐇 Ecommerce / 2 Page  🦚</h3>

```dash
http://localhost:3000/ecommerce/2
```

```TSX
//============ 🗂️App/🗂️ecommerce/🗂️2/⚛️page.tsx ============== 

const ProductTwo = () => {
  return (
    <div className="m-[4rem]">
      <h1 className="text-3xl mb-[1rem]">Football</h1>

      <img
        src="https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Macbook Pic"
        className="w-[40rem]"
      />

      <p className="text-2xl mt-[1rem]">Price: $200</p>
    </div>
  );
};

export default ProductTwo;

```

</br>

<h3 align="center" > 🐇 Ecommerce / (.)2 Page  🦚</h3>

```dash
http://localhost:3000/ecommerce
```

```TSX
//============ 🗂️App/🗂️ecommerce/🗂️(.)2/⚛️page.tsx ============== 

"use client";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const InterceptedProductTwo = () => {
  const router = useRouter();

  const closeModal = () => router.push("/ecommerce");

  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        onClick={closeModal}
      >
        <div
          className="bg-white p-8 rounded-lg shadow-lg text-center relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            onClick={closeModal}
          >
            <X size={24} />
          </button>

          <h1 className="text-3xl mb-4">Football</h1>

          <img
            src="https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Football Pic"
            className="w-[40rem] mx-auto rounded-lg"
          />

          <p className="text-2xl mt-4">Price: $200</p>
        </div>
      </div>
    </>
  );
};

export default InterceptedProductTwo;

```

</br>

<h3 align="center" > 🐇 Ecommerce / 3 Page  🦚</h3>

```dash
http://localhost:3000/ecommerce/3
```

```TSX
//============ 🗂️App/🗂️ecommerce/🗂️3/⚛️page.tsx ============== 

const ProductThree = () => {
  return (
    <div className="m-[4rem]">
      <h1 className="text-3xl mb-[1rem]">Sofa</h1>

      <img
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Macbook Pic"
        className="w-[40rem]"
      />

      <p className="text-2xl mt-[1rem]">Price: $500</p>
    </div>
  );
};

export default ProductThree;

```

</br>

<h3 align="center" > 🐇 Ecommerce / (.)3 Page  🦚</h3>

```dash
http://localhost:3000/ecommerce
```

```TSX
//============ 🗂️App/🗂️ecommerce/🗂️(.)3/⚛️page.tsx ============== 

"use client";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const InterceptedProductTwo = () => {
  const router = useRouter();

  const closeModal = () => router.push("/ecommerce");

  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        onClick={closeModal}
      >
        <div
          className="bg-white p-8 rounded-lg shadow-lg text-center relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            onClick={closeModal}
          >
            <X size={24} />
          </button>

          <h1 className="text-3xl mb-4">Sofa</h1>

          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Sofa Pic"
            className="w-[40rem] mx-auto rounded-lg"
          />

          <p className="text-2xl mt-4">Price: $500</p>
        </div>
      </div>
    </>
  );
};

export default InterceptedProductTwo;

```
