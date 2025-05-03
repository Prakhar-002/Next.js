<h1  align="center" > 🏕️ 𝐖𝗂𝗍ɦⱺυ𝗍 𝐔𝗌𝗂𐓣𝗀 𝐓ɦ𝖾 𝐏α𝖼𝗄α𝗀𝖾 🏚️ </h1>

</br>

![6](https://github.com/user-attachments/assets/44e2abc8-a2b7-4e4a-b685-8ae044a27928)

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
