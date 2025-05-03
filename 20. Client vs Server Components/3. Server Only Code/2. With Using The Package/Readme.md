<h1  align="center" > 🏕️ 𝐖𝗂𝗍ɦ 𝐔𝗌𝗂𐓣𝗀 𝐓ɦ𝖾 𝐏α𝖼𝗄α𝗀𝖾 🏚️ </h1>

</br>

![7](https://github.com/user-attachments/assets/16257e0b-f207-46d7-bda4-a49a9500edda)

</br>

<h3 align="center" > 🐇 Lib /Utils Page 🦚</h3>

```dash
http://localhost:3000/
```

```TSX
//============ 🗂️lib/⚛️utils.ts ============== 

// This code suppose to run inside the server component
// - and not inside the client component

export const add = (a: number, b: number) => a + b;
export const subtract = (a: number, b: number) => a - b;

```

</br>

![9](https://github.com/user-attachments/assets/0f9fa7ff-a9b6-4846-a0d1-3dec2bb31280)

</br>

<h3 align="center" > 🐇 Client Side Component 🦚</h3>

```dash
http://localhost:3000/client-component
```

```TSX
//============ 🗂️client-component/⚛️page.tsx ============== 

"use client";

import { add, subtract } from "@/lib/utils";

const ClientComponent = () => {
  const result = add(1, 2);
  const result2 = subtract(1, 2);
  console.log(result);
  console.log(result2);

  return <div>Client Component</div>;
};

export default ClientComponent;

```

</br>

![8](https://github.com/user-attachments/assets/2918d18d-7f41-4834-96cf-57ef890461bf)

</br>

<h3 align="center" > 🐇 Server Side Component 🦚</h3>

```dash
http://localhost:3000/server-component
```

```TSX
//============ 🗂️server-component/⚛️page.tsx ============== 

import { add, subtract } from "@/lib/utils";

const ServerComponent = () => {
  const result = add(1, 2);
  const result2 = subtract(1, 2);
  console.log(result);
  console.log(result2);

  return <div>Server Component</div>;
};

export default ServerComponent;

```
